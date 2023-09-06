const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBrith: Number,
    Comments: String,
    rol: String
});

module.exports = mongoose.model("Profile", ProfileSchema, "profile");