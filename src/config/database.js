const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_SECRET);
    console.log("✅ DB connected");
  } catch (err) {
    console.error("❌ DB ERROR:", err.message);
  }
};

module.exports = connectDB;
