const mongoose = require("mongoose");
module.exports = mongoose.model("Tasks",{
  description: {
    required: true,
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:'User'
  }
});
