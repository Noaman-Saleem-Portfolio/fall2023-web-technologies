const express = require("express");
const app = express();
const PORT = 8000;

// console.log(app);

app.get("/", (req, res) => {
  //   console.log(`Aha ha we receieved a request at URL /`);
  //   console.log(res);
  res.send(`Kesy ho beta. Mai app ka web server hun :) :)`);
});

app.listen(PORT, (req, res) => {
  console.log(`SERVER IS LISTENING AT PORT ${PORT}`);
});
