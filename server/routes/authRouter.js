const express = require("express");

const authenticate = require("../controllers/authenticate");
const upload = require("../utils/photoUpload");

const router = express.Router();

router.post("/register", upload.uploadImage, authenticate.register);

router.post("/login", authenticate.login);

// router.get("/verify", authenticate.protect);

module.exports = router;
