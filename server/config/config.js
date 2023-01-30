const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });
  console.log(`Connected! To MongoDb 🙂 ${conn.connection.host}`) 
};

module.exports = connectDb;
