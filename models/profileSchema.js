const mongoose = require("mongoose");

const reqString = {
  type: String,
  required: true,
}

const profileSchema = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  serverID: { type: String, require: true },
  coins: { type: Number, default: 100 },
  bank: { type: Number },
});

const model = mongoose.model("profileModels", profileSchema);

module.exports = model;

