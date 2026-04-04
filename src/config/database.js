const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nishantjindal_db_user_node:olbWQNV6bAmDtMGJ@namastenode.lrfrg6d.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
