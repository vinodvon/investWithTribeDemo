const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  person_name: { type: String, required: true },
  person_phone: { type: Number, required: true },
  address_line: { type: String, required: true },
  address_end_date: { type: Date, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

module.exports = mongoose.model("Detail", detailSchema);
