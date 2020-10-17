const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
    username: String,
    userID: String,
    reason: String,
    rUsername: String,
    rID: String,
    time: String,
});

module.exports = mongoose.model("Report", reportSchema);