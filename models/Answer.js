import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    formId: {
      type: Schema.Types.ObjectId,
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
    timestamps: true,
    strict: false,
  }
);

export default mongoose.model("Answer", schema);
