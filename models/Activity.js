const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  MYtineraryName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtag: {
    type: String,
    required: true
  }
});
module.exports = Activity = mongoose.model("activity", ActivitySchema);
