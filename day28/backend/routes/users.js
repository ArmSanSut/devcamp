var express = require('express');
var router = express.Router();

router.post("/upload", (req, res) => {
  console.log(req.files);
  const newpath = __dirname + "/../public/upload-files/"; //(..) move out from folder routes
  const file = req.files.file_name;
  const filename = file.name;
 
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
    res.status(200).send({ message: "File Uploaded", code: 200 });
  });
});



module.exports = router;
