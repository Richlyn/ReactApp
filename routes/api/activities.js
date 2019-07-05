const express = require("express");
const router = express.Router();
const Activity = require("../../models/Activity");

router.get("/", function(req, res) {
  Activity.find()
    .then(activities => {
      if (!activities) {
        return res.status(404).json("oops! no activities");
      }
      res.json(activities);
    })
    .catch(err => res.status(404).json("ach no sorry Error"));
});

router.get("/:MYtineraryName", function(req, res) {
  var MYtineraryName = req.params.MYtineraryName;
  Activity.find({ MYtineraryName: MYtineraryName }, (err, activities) => {
    if (!activities) {
      return res.status(404).json(err);
    } else {
      res.send(activities);
    }
  });
});

module.exports = router;
