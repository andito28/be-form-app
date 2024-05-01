import mongoose from "mongoose";
import Form from "../models/Form.js";
import Answer from "../models/Answer.js";

class AnswerController {
  async store(req, res) {
    try {
      if (!req.params.formId) {
        throw { code: 400, message: "REQUIRED_FORM_ID" };
      }
      if (!mongoose.Types.ObjectId.isValid(req.params.formId)) {
        throw { code: 400, message: "INVALID_ID" };
      }

      let field = {};
      req.body.answer.forEach((answer) => {
        field[answer.questionId] = answer.value;
      });

      const answer = await Answer.create({
        formId: req.params.formId,
        userId: req.jwt.id,
        ...field,
      });
      if (!answer) {
        throw { code: 400, message: "ADD_ANSWER_FAILED" };
      }

      return res.status(200).json({
        status: true,
        message: "ADD_ANSWER_SUCCESS",
        answer,
      });
    } catch (error) {
      return res.status(error.code || 500).json({
        status: false,
        message: error.message,
      });
    }
  }
}

export default new AnswerController();
