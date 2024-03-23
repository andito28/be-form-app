import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    created_at: {
      type: Number,
    },
    updated_at: {
      type: Number,
    },
  },
  {
    timestamps: () => Math.floor(Date.now / 1000),
  }
);

export default mongoose.model("User", schema);
