import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const OptionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  value: String,
});

const QuestionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  question: String,
  type: String,
  required: Boolean,
  options: [OptionSchema],
});

const FormSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: String,
    description: String,
    questions: [QuestionSchema],
    invites: [String],
    public: Boolean,
  },
  {
    timestamps: true,
  }
);

FormSchema.plugin(mongoosePaginate);

export default mongoose.model("Form", FormSchema);
