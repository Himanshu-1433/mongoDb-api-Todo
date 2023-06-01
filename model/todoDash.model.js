const mongoose = require("mongoose");

let scheme = new mongoose.Schema({
    taskName: String,
    taskDetails: String,
    time: Date,
    status: String,
});

let collectionName = "todo_dashboard";
let userModel = mongoose.model(collectionName, scheme, collectionName);

module.exports = userModel;