import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: String,
});

export default mongoose.model("User", userSchema);
