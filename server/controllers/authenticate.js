const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,

      friends,
      location,
      occupation,
    } = req.body;

    const picturePath = req.file.originalname;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 1000),
    });

    res.status(201).json({
      newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user)
      return res.status(400).json({
        message: "Please provide valid email",
      });

    const compare = await bcrypt.compare(password, user.password);

    if (!compare)
      return res.status(400).json({
        message: "Please provide valid credentials",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      return res.status(401).json({
        message: "Please login to get Access",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    // res.status(200).json({
    //   user: decode.id,
    // });
    req.user = decode.id;
    next();
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
