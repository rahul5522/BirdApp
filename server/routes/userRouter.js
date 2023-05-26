const express = require("express");

const authenticate = require("../controllers/authenticate");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/:id", authenticate.protect, userController.getUser);
router.get("/:id/friends", authenticate.protect, userController.getUserFriends);
router.patch(
  "/updateFriend/:friendId",
  authenticate.protect,
  userController.addRemoveFriend
);

module.exports = router;
