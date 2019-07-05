const express = require("express");
const router = express.Router();
const City = require("../../models/City");

router.get("/", function(req, res) {
  City.find()
    .then(cities => {
      if (!cities) {
        return res.status(400).json({ msg: "No cities" });
      }
      res.json(cities);
    })
    .catch(err => res.status(404).json({ nocities: "There are no cities" }));
});

module.exports = router;
