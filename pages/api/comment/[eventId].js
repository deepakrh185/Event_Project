// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async (req, res) => {
  const eventId = req.query.eventId;
  const client = await MongoClient.connect(
    "mongodb+srv://deepak:deepakrh@cluster0.sfdwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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
    const result = await db.collection("comment").insertOne(totalData);
    console.log(result);
    totalData.id = result.insertedId;
    res.status(201).json({ message: "Success", feedback: totalData });
  } else if (req.method === "GET") {
    const db = client.db();
    const getData = await db
      .collection("comment")
      .find()
      .sort({ _id: -1 })
      .toArray();
    res.status(200).json({ comment: getData });
  }
  client.close();
};
