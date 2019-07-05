var express = require("express");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var key = require("../../config/keys");
var User = require("../../models/User");
var router = express.Router();
//const passport = require("passport");

router.post("/register", function(req, res) {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res
        .status(400)
        .json({ error: "This email has already been used!" });
    }

    if (req.body.password !== req.body.passwordConfirmation) {
      return res.status(400).json({ error: "The passwords are not matching!" });
    }

    var hashedPassword = bcrypt.hashSync(req.body.password, 8);

    User.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      },
      function(err, user) {
        if (err)
          return res
            .status(500)
            .send("There was a problem registering the user.");

        // create a token
        var token = jwt.sign({ id: user._id }, key.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
      }
    );
  });
});

router.get("/me", function(req, res) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(401).send({ auth: false, message: "No token provided." });

  jwt.verify(token, key.secret, function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // res.status(200).send(decoded);
    console.log(decoded);
    User.findById(
      decoded.id,
      { password: 0 }, //projection
      function(err, user) {
        if (err)
          return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");

        res.status(200).send(user);
      }
    );
  });
});

router.post("/login", function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, key.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});

router.get("/logout", function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

//auth with google
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile"]
//   })
// );
//callback route for google to redirect to
// router.get("/google/redirect", function(req, res) {
//   res.send("you reached a call back uri");
// });

module.exports = router;
