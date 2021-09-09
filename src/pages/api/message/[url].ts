import mongoose from "mongoose";
import { Message} from "../../../lib/mongo/mesage.schema";
import connectDB from "../../../middleware/mongodb";

async function handler(req: any, res: any) {
  await mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/my-messa"
  );
  function text2Binary(string: string) {
    return string.split(" ").map((item) => ({
      binary: item
        .split("")
        .map((char) => char.charCodeAt(0).toString(2))
        .join(" "),
      word: item,
    }));
  }
  switch (req.method) {
    case "GET":
      const { url } = req.query;
      console.log(url);
      const message = await Message.findOne({ url }) || null;
      console.log(message);
      message
        ? res.status(200).json({ data: text2Binary(message.note||"") })
        : res.status(404).json({ message: "Not found" });
      break;
  }
}
export default connectDB(handler);
