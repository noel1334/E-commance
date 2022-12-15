import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: String,
});

export default mongoose.model("User", userSchema);
