const User = require("../models/User");

exports.getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).populate("friends");

    if (!user)
      return res.status(400).json({
        message: "User not found",
      });

    res.status(200).json({
      user,
    });
  } catch (err) {
    res.status(404).json({
      error: err.message,
    });
  }
};

exports.getUserFriends = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          location,
          picturePath,
        };
      }
    );

    res.status(200).json({
      friends: formattedFriends,
    });
  } catch (err) {
    res.status(404).json({
      error: err.message,
    });
  }
};

exports.addRemoveFriend = async (req, res, next) => {
  //Add friend in both user freind list just like facebook
  try {
    const { friendId } = req.params;
    const userId = req.user;

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    console.log(user.friends);
    // console.log(friendId);

    let exist = false;

    for (let i of user.friends) {
      console.log(i.toString(), friendId);
      if (i.toString() === friendId) {
        exist = true;
      }
    }

    console.log(exist);

    if (exist) {
      user.friends = user.friends.filter((id) => id.toString() !== friendId);
      friend.friends = friend.friends.filter((id) => id.toString() !== userId);
    } else {
      user.friends.push(friendId);
      friend.friends.push(userId);
    }

    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return {
          _id,
          firstName,
          lastName,
          occupation,
          location,
          picturePath,
        };
      }
    );

    res.status(200).json({
      friends: formattedFriends,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      error: err.message,
    });
  }
};
