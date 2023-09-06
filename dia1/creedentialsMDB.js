const mongoose = require("mongoose");

const CreedentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
});

module.exports = mongoose.model("Credeentials", CreedentialsSchema, "credentials");