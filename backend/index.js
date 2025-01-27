import express from "express";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import { dbConnect } from "./db.js";
import cors from "cors";
import productsRoute from "./routes/productsRoute.js";

const app = express();
dbConnect();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

// const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);

app.listen(9000, () => {
  console.log(`Server running on port 3000 !!`);
});
