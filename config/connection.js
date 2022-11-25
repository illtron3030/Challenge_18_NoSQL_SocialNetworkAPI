const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ilya30:90909090@cluster0.n1fc9us.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// Logs MongoDB queries
mongoose.set("debug", true);

module.exports = mongoose.connection;
