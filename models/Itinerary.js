const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  MYtineraryName: {
    type: String,
    required: true
  },
  userPic: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});
module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
