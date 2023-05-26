const Post = require("../models/postModel");

exports.createPost = async (req, res, next) => {
  //   console.log(req.body);

  //   console.log(req.file);
  //   console.log(req.user);

  try {
    let newpost;
    if (req.file) {
      newPost = await Post.create({
        user: req.user,
        location: req.body.location,
        description: req.body.description,
        postPhoto: req.file.originalname,
        likes: {},
        comments: [],
      });
    } else {
      newPost = await Post.create({
        user: req.user,
        location: req.body.location,
        description: req.body.description,

        likes: {},
        comments: [],
      });
    }

    const posts = await Post.find();

    res.status(201).json({
      posts,
    });
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

exports.getFeedPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("user");

    res.status(200).json({
      posts,
    });
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

exports.getUserPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ user: req.params.id }).populate("user");

    res.status(200).json({
      posts,
    });
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

exports.updatePostLikes = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const userId = req.user;

    const post = await Post.findById(postId);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    await post.save();

    res.status(200).json({
      message: post,
    });
  } catch (err) {
    res.status(409).json({
      message: err.message,
    });
  }
};

exports.getPostComments = (req, res, next) => {};

exports.updatePostComments = (req, res, next) => {};
