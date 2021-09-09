import mongoose, { Document, Schema,Model, model } from "mongoose";

export interface IMessage extends Document {
  note: string;
  url: string;
}

const message: Schema = new Schema({
  note: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});


export const Message: Model<IMessage> = mongoose.models.Message || model("Message", message)
