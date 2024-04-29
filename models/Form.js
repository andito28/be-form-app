import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

// Skema untuk opsi pertanyaan
const OptionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  value: String,
});

// Skema untuk pertanyaan
const QuestionSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  question: String,
  type: String,
  required: Boolean,
  options: [OptionSchema], // Menggunakan skema opsi untuk menentukan opsi dalam pertanyaan
});

// Skema utama untuk formulir
const FormSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: String,
    description: String,
    questions: [QuestionSchema], // Menggunakan skema pertanyaan untuk menentukan pertanyaan dalam formulir
    invites: [String],
    public: Boolean,
  },
  {
    timestamps: true, // Menambahkan waktu pembuatan dan pembaruan secara otomatis
  }
);

FormSchema.plugin(mongoosePaginate);

export default mongoose.model("Form", FormSchema);
