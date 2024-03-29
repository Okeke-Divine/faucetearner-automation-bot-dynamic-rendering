const express = require("express")
const { mineLogic } = require("./mineLogic")

const app = express()

const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
  const { uname, pswd, time } = req.query;
  if (uname == undefined || pswd == undefined || time == undefined) {
    res.send('Params error! Kill the script');
    console.log('Params error! Kill the script');
  } else {
    res.send('Intialising bot for uname: <b>' + uname + '</b> pswd: <b>' + pswd + '</b>');
    const hostUrl = req.protocol + '://' + req.get('host');
    mineLogic(res, uname, pswd, time, hostUrl);
  }
})
app.get("/keep-alive", (req, res) => {
  // request are sent to this route every 5 min to keep the server active and detect when the server is down
  // and they are also sent by the mining bot every minute
  const { bot } = req.query;
  if (bot == undefined) {
    res.send("Alive {200}!");
    console.log("THE SERVER WAS PINGED");
  } else {
    res.send("Alive {200}! => " + bot);
    console.log("THE SERVER WAS PINGED BY => " + bot);
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
