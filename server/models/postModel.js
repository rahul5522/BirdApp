const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  location: String,
  description: String,
  postPhoto: String,
  likes: {
    type: Map,
    of: Boolean,
  },
  comments: {
    type: Array,
    default: [],
  },

  createdAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
