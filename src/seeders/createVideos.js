require("dotenv").config();
const mongoose = require("mongoose");
const Video = require("./../models/videos");
const connectionString = process.env.MONGO_URI; // Replace with your MongoDB connection string
const seedData = require("./../exampleData/videosData");
const seedDatabase = async () => {
  try {
    await Video.deleteMany({}); // Clear existing data before seeding
    const insertedData = await Video.insertMany(seedData); // Insert the seed data
    console.log(`${insertedData.length} documents inserted.`);
    mongoose.disconnect(); // Disconnect from the database after seeding
  } catch (error) {
    console.error("Error seeding the database:", error);
    mongoose.disconnect();
  }
};
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to the database.");
  await seedDatabase();
});
