const mongoose = require("mongoose");
const URL = "mongodb://0.0.0.0:27017/my_todo";

let connection = mongoose.connect(URL).then(() => {
    console.log("database connected")
}).catch((err) => {
    console.log(err);
})

module.exports = connection;