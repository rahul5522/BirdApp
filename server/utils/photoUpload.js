const multer = require("multer");

//Multer to store uploaded Img while registering
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/img/users");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

exports.uploadImage = upload.single("picture");
