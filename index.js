const express = require("express")
const { mineLogic } = require("./mineLogic")

const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
  const { uname, pswd } = req.query;
  if (uname == undefined || pswd == undefined) {
    res.send('Params error! Kill the script');
    console.log('Params error! Kill the script');
  } else {
    res.send('Intialising bot for uname: <b>' + uname + '</b> pswd: <b>' + pswd+ '</b>');
    mineLogic(res, uname, pswd);
  }
})
app.get("/keep-alive", (req,res) => {
  res.send("Alive {200}!");
  console.log("THE SERVER WAS PINGED");
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
