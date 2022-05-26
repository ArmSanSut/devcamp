var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');


router.get('/api/profile', async function (req, res) {
    let token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorized');
    } else {
      try {
        // remove 'Bearer' prefix to validate pure token value
        const decoded = jwt.verify(
          token.replace('Bearer', '').trim(),
          'codecamp_very_$secr3T!'
        );
        console.log(decoded);

      } catch (e) {
        res.status(401).send('Unauthorized');
      }
    }
   });

module.exports = router;