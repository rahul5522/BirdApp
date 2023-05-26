const express = require("express");

const authenticate = require("../controllers/authenticate");
const postsController = require("../controllers/postsController");
const upload = require("../utils/photoUpload");

const router = express.Router();

router.post(
  "/",
  authenticate.protect,
  upload.uploadImage,
  postsController.createPost
);

router.get("/", authenticate.protect, postsController.getFeedPosts);
router.get("/:id", authenticate.protect, postsController.getUserPosts);

router.patch(
  "/:postId/like",
  authenticate.protect,
  postsController.updatePostLikes
);

router.patch(
  "/:postId/comment",
  authenticate.protect,
  postsController.getPostComments
);

router.patch(
  "/:postId/comment",
  authenticate.protect,
  postsController.updatePostComments
);

module.exports = router;
