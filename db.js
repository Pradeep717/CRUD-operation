const mongoose = require("mongoose");


async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/crud',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
  }

module.exports = connect