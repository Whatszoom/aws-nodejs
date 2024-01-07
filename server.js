const express = require("express");
const app = express();

app.get("/api/get", (req, res) => {
  res.send({ message: "Welcome to Whatszoom server" });
});

app.get("/api/get_user_details", (req, res) => {
  res.send({
    user: {
      Platform: "Whatszoom app",
      From: "Whatszoom india",
    },
  });
});

app.listen(8000, () => {
  console.log("listening to 8000");
});
