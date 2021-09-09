import { Message } from "../../lib/mongo/mesage.schema";
import connectDB from "../../middleware/mongodb";

async function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      const url = req;
      console.log(url);

      //   const message = new Message();
      //   await message.findOne({url: req.query.url[2]});

      break;
    case "POST":
      let r = (Math.random() + 1).toString(36).substring(7);
      const { note } = JSON.parse(req.body);
      console.log(note);

      const notes = new Message({ note: note, url: r });
      await notes.save();
      res.status(200).json({
        Message: "Success",
        url: `${process.env.DOMAIN}/message/${r}`,
      });
      break;
  }
}
export default connectDB(handler);
