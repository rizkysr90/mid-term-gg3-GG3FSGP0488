// The purpose of this file is to create seeds data
// Please run this function if you run the this apps for the first time
require("dotenv").config();
const mongoose = require("mongoose");
const Video = require("./../models/video.model");
const { Product } = require("./../models/product.model");
const {
  seller: a,
  sellerProducts: aProducts,
  sellerVideo: aVideo,
} = require("./sellers/1_SellerData");
const {
  seller: b,
  sellerProducts: bProducts,
  sellerVideo: bVideo,
} = require("./sellers/2_SellerData");
const creationFirstSeller = async () => {
  let insertedVideoData = aVideo;
  // add subdocuments seller into video collections
  insertedVideoData = { ...insertedVideoData, seller: a };
  console.log("Ini data videonya", insertedVideoData);
  const creationVideo = await Video.create(insertedVideoData);
  console.log("Ini response create video", creationVideo);
  console.log("Ini id videonya", creationVideo._id);
  let insertedProductsData = aProducts.map((product) => {
    // Add live_videos field for refrences video collections to this product document
    return { ...product, live_videos: [creationVideo._id] };
  });
  const creationProducts = await Product.insertMany(insertedProductsData);
  console.log("Ini response create product", creationProducts);
  const createdProductsId = creationProducts.map((product) => {
    return product._id;
  });
  // Add products field for refrences products collections to the video document
  const updatedVideo = await Video.updateOne(
    { _id: creationVideo._id },
    { products: createdProductsId }
  );
  console.log("Ini response update video", updatedVideo);
};
const creationSeller = async (video, seller, products) => {
  let insertedVideoData = video;
  // add subdocuments seller into video collections
  insertedVideoData = { ...insertedVideoData, seller };
  // console.log("Ini data videonya", insertedVideoData);
  const creationVideo = await Video.create(insertedVideoData);
  // console.log("Ini response create video", creationVideo);
  console.log("Ini id videonya", creationVideo._id);
  let insertedProductsData = products.map((product) => {
    // Add live_videos field for refrences video collections to this product document
    return { ...product, live_videos: [creationVideo._id] };
  });
  const creationProducts = await Product.insertMany(insertedProductsData);
  // console.log("Ini response create product", creationProducts);
  const createdProductsId = creationProducts.map((product) => {
    return product._id;
  });
  // Add products field for refrences products collections to the video document
  const updatedVideo = await Video.updateOne(
    { _id: creationVideo._id },
    { products: createdProductsId }
  );
  // console.log("Ini response update video", updatedVideo);
};
const creationOfSeeder = async () => {
  try {
    // await creationFirstSeller();
    await creationSeller(bVideo, b, bProducts);
    console.log(`Success creation`);
    mongoose.disconnect(); // Disconnect from the database after seeding
  } catch (error) {
    console.error("Error seeding the database:", error);
    mongoose.disconnect();
  }
};
// Connect to the mongoDB
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
// Make a connection
const db = mongoose.connection;
// If error db event trigger
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// If open  db event trigger
db.once("open", async () => {
  console.log("Connected to the database.");
  await creationOfSeeder();
});
