const express = require("express");
const dotenv = require("dotenv");

var request = require("request"); // "Request" library

const router = express.Router();

router.post("/pause", (req, res) => {
  var options = {
    url: "https://api.spotify.com/v1/me/player/pause",
    headers: {
      Authorization: "Bearer " + req.headers.token,
    },
    json: true,
  };

  request.put(options, function (error, response, body) {
    if (response.statusCode === 204) {
      res.send({ status: 200, message: "Paused" });
    } else {
      res.send({
        status: 400,
        message:
          "There was an error completing your request, please try again.",
      });
    }
  });
});

router.post("/play", (req, res) => {
  var options = {
    url: "https://api.spotify.com/v1/me/player/play",
    headers: {
      Authorization: "Bearer " + req.headers.token,
    },
    json: true,
  };

  request.put(options, function (error, response, body) {
    if (response.statusCode === 204) {
      res.send({ status: 200, message: "Playing" });
    } else {
      res.send({
        status: 400,
        message:
          "There was an error completing your request, please try again.",
      });
    }
  });
});

router.post("/next", (req, res) => {
  var options = {
    url: "https://api.spotify.com/v1/me/player/next",
    headers: {
      Authorization: "Bearer " + req.headers.token,
    },
    json: true,
  };

  request.post(options, function (error, response, body) {
    if (response.statusCode === 204) {
      res.send({ status: 200, message: "Next Song" });
    } else {
      res.send({
        status: 400,
        message:
          "There was an error completing your request, please try again.",
      });
    }
  });
});

router.post("/back", (req, res) => {
  var options = {
    url: "https://api.spotify.com/v1/me/player/previous",
    headers: {
      Authorization: "Bearer " + req.headers.token,
    },
    json: true,
  };

  request.post(options, function (error, response, body) {
    if (response.statusCode === 204) {
      res.send({ status: 200, message: "Previous Song" });
    } else {
      res.send({
        status: 400,
        message:
          "There was an error completing your request, please try again.",
      });
    }
  });
});

router.checkTest = (a, b) => {
  return a + b;
};

https: module.exports = router;
