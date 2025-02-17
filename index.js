import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import { EmployeeRouter } from "./Routes/EmployeeRoute.js";
import { petbottlesRouter } from "./Routes/PetBottlesRoute.js";  // Correct import

const app = express();

// CORS options
const corsOptions = {
  origin: ["http://localhost:3000"], // Replace with specific origin(s) you allow
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // If credentials (cookies/auth) are needed
};

// Middleware to handle CORS
app.use(cors(corsOptions));
app.use(express.json());

// Define routes
app.use("/auth", adminRouter);
app.use("/petbottles", petbottlesRouter);  // Correct route definition

app.use(express.static("Public"));

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
