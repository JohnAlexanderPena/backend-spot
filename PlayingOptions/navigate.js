const express = require("express");
const dotenv = require("dotenv");

var request = require("request"); // "Request" library

const router = express.Router();

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

router.post("/pause", (req, res) => {
  console.log(req.headers.token);
  var options = {
    url: "https://api.spotify.com/v1/me/player/pause",
    headers: {
      Authorization: "Bearer " + req.headers.token,
    },
    json: true,
  };

  // use the access token to access the Spotify Web API
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

module.exports = router;
