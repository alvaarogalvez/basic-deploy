const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("salvatore");

});

app.listen(3000, () => {
    console.log("server is runnning on port 3000");


});