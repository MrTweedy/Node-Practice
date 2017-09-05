
/* A super-simple Node API that accepts a "userName" variable in a GET request and returns a string that associates the name with a randomly chosen element. */
const express = require("express");
const app = express();

app.use("/", express.static("html"));

const elements = ["Earth", "Water", "Fire", "Air"]

app.get("/endpoint", function(req, res){

  var fourSidedDiceRoll = Math.floor(elements.length * Math.random());

  var element = elements[fourSidedDiceRoll];

  res.send(req.query.userName + ", your elements is " + element + ".");

});

app.listen(3000, function () {
  console.log('Listening on port 3000!')
});
