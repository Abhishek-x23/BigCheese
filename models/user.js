import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String }, 
    username: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
  },
  { timestamps: true }
);

// Prevent model overwrite error in Next.js
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
