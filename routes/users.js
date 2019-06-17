var models = require("../models");
var express = require("express");
var router = express.Router();

router.post("/create", function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect("/");
  });
});

router.get("/:user_id/destroy", function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect("/");
  });
});

router.post("/:user_id/tasks/create", function(req, res, next) {
  models.Task.create({
    title: req.body.title,
    tag: req.body.tag,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect("/");
  });
});

router.post("/:user_id/tasks/:task_id/update", function(req, res) {
  models.Task.update(
    { tag: req.body.tag },
    {
      where: {
        id: req.params.task_id
      }
    }
  ).then(function() {
    res.redirect("/");
  });
});
// .catch(function(err) {
//   res.send(err);
// });
router.patch("/:user_id/tasks/:task_id/update", function(req, res) {
  models.Task.update(
    { tag: req.body.tag },
    {
      where: {
        id: req.params.task_id
      }
    }
  ).then(function() {
    res.redirect("/");
  });
});

router.get("/:user_id/tasks/:task_id/destroy", function(req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect("/");
  });
});

module.exports = router;
