import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    questions: {
      type: Array,
    },
    invites: {
      type: Array,
    },
    public: {
      type: Boolean,
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

export default mongoose.model("Form", schema);
