const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nishantjindal_db_user_node:8wqP6Buy7RfUI3i1@namastenode.lrfrg6d.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
