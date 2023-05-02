require("dotenv").config();
const express = require("express");
const https = require("https");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { cityName } = req.body;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;
  // console.log(url);

  https.get(url, (response) => {
    if (response.statusCode === 200) {
      response.on("data", function (data) {
        const weatherReport = JSON.parse(data);
        const { temp } = weatherReport.main;
        const { description, icon } = weatherReport.weather[0];
        const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        res.write(`<p>The weather is currently <b>${description}</b></p>`);
        res.write(`<p>Temperature in <b>${cityName}</b> is <b>${temp}</b> degree Celsius.</p>`);
        res.write(`<img src=${imageUrl} />`);
        res.write(`<br><a href="http://localhost:${PORT}/">Check Weather of other place</a>`);
        res.send();
      });
    } else {
      res.write("<h1>Error Occurred</h1>");
      res.send();
    }
  });
});

app.listen(PORT, (req, res) => {
  console.log("server is listening at 4000");
});
