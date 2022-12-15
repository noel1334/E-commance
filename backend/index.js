import express from "express";
import userRoute from "./routes/userRoute.js";
import {dbConnect} from "./db.js"
// import productsRoute from "./routes/productsRoute.js";

const app = express();
dbConnect()
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoute);
// app.use("/api/products", productsRoute);

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
