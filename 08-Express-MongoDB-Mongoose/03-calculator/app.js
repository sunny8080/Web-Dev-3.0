const express = require("express");

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  // res.send("Hello sunny");
  res.send("<h1>Hello sunny</h1>");
});

app.get('/addition', (req, res)=>{
  res.sendFile(__dirname + "/index.html");
})

app.post("/addition", (req, res) => {
  let { num1, num2 } = req.body;
  num1 = Number(num1)
  num2 = Number(num2)
  res.send("The result of calculation is : " + (num1 + num2));
});

app.listen(3000, (req, res) => {
  console.log("Server is started at 3000...");
});
