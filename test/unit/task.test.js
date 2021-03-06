"use strict";

var expect = require("expect.js");

describe("models/task", function() {
  before(function() {
    return require("../../models").sequelize.sync();
  });

  beforeEach(function() {
    this.User = require("../../models").User;
    this.Task = require("../../models").Task;
  });

  describe("create", function() {
    it("creates a task", function() {
      return this.User.create({ username: "johndoe" })
        .bind(this)
        .then(function(user) {
          return this.Task.create({
            title: "a title",
            tag: "a tag",
            UserId: user.id
          }).then(task => {
            return this.Task.update(
              {
                tag: "updated tag"
              },
              {
                where: {
                  id: task.id
                }
              }
            ).then(function(task) {
              expect(task[0]).to.equal(1);
            });
          });
        });
    });
  });
});
