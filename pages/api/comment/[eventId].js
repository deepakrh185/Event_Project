// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async (req, res) => {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(
    "mongodb+srv://app:app12345@cluster0.md5hk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return res.status(422).json({ message: "comment not found" });
    }
    const totalData = {
      email,
      name,
      text,
      eventId,
    };
    const db = client.db();
    const result = await db.collection("email").insertOne(totalData);
    console.log(result);
    res.status(201).json({ message: "Success", feedback: totalData });
  } else if (req.method === "GET") {
    const dummyData = [
      { name: "deepak", content: "hope you doing well" },
      { name: "jacksparoow", content: "tan tada tan tan tan taaaa" },
    ];
    res.status(200).json({ comment: dummyData });
  }
  client.close();
};
