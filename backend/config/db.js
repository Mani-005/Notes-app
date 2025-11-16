const mongoose = require('mongoose');

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error(`⚠️  Server will continue running, but database operations will fail.`);
    console.error(`💡 Please check your .env file and MongoDB connection string.`);
    return false;
  }
};

module.exports = { connect };

