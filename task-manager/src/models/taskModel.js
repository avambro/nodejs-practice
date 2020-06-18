const mongoose = require("mongoose");
const url =
  "mongodb+srv://" +
  conn.user +
  ":" +
  conn.pwd +
  "@syscarcluster-ux8a6.mongodb.net/" +
  conn.db +
  "?retryWrites=true&w=majority";


mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const taskSchema = new mongoose.Schema({
  description: {
    required: true,
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

var taskModel = mongoose.model("Tasks", taskSchema);

module.exports = taskModel;
