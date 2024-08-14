import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

dotenv.config();

// Configuring App
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [],
  })
);

// Configuring Database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.poi1lw7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: false,
    deprecationErrors: true,
  },
});
let db;

// Test Route
app.get("/", async (req, res) => {
  res.json({ status: "success", message: "Server is Running!" });
});

app.get("/products", async (req, res) => {
  let returnData;
  let {
    skip = 0,
    limit = 15,
    search,
    category,
    brand,
    priceRange,
    newestFirst,
    priceSort,
  } = req.query;

  let priceMin = 0;
  let priceMax = Infinity;
  try {
    priceMin = parseInt(priceRange.split("-")[0], 10);
    priceMax = parseInt(priceRange.split("-")[1], 10);
    priceMin = isNaN(priceMin) ? 0 : priceMin;
    priceMax = isNaN(priceMax) ? Infinity : priceMax;
  } catch (error) {}

  try {
    skip = parseInt(skip, 10);
  } catch (error) {}

  try {
    limit = parseInt(limit, 10);
  } catch (error) {}

  const pipeline = [
    {
      $match: {
        price: {
          $gte: priceMin,
          $lte: priceMax,
        },
      },
    },
  ];

  if (search) {
    pipeline.push({
      $match: {
        name: { $regex: search, $options: "i" },
      },
    });
  }

  if (category) {
    pipeline.push({
      $match: {
        category: { $regex: category, $options: "i" },
      },
    });
  }

  if (brand) {
    pipeline.push({
      $match: {
        brand: { $regex: brand, $options: "i" },
      },
    });
  }

  if (newestFirst && newestFirst === "true") {
    pipeline.push({
      $sort: { createdAt: -1 },
    });
  }

  if (priceSort && (priceSort === "high" || priceSort === "low")) {
    pipeline.push({
      $sort: { price: priceSort === "high" ? -1 : 1 },
    });
  }

  try {
    const data = await db
      .collection("products")
      .aggregate([
        ...pipeline,
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
      ])
      .toArray();

    const count = await db
      .collection("products")
      .aggregate([
        ...pipeline,
        {
          $count: "totalCount",
        },
      ])
      .toArray();

    returnData = {
      data,
      count: count[0].totalCount ?? 0,
    };
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }

  res.json({ success: true, ...returnData });
});

// Connecting to MongoDB first, then Starting the Server
client
  .connect()
  .then(async () => {
    db = client.db("lapshopper");
    app.listen(port, () => {
      console.log(`Running in port ${port}`);
    });
  })
  .catch(console.dir);
