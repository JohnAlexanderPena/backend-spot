const express = require("express");
const dotenv = require("dotenv");

var request = require("request"); // "Request" library
const { response } = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({
    status: 200,
    message: "Route Is Working",
  });
});

router.get("/getCategories", (req, res) => {
  var options = {
    url: "https://api.spotify.com/v1/browse/categories",
    headers: {
      Authorization: req.headers.token,
    },
    json: true,
  };

  request.get(options, (error, response, body) => {
    console.log(response.body);
    if (response.statusCode === 200) {
      res.send({ status: 200, data: response.body });
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
