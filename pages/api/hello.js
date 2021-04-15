// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    const client = await MongoClient.connect(
      "mongodb+srv://app:app12345@cluster0.md5hk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();
    await db.collection("emails").insertOne({ email: email });
    client.close();

    res.status(201).json({ message: "Success", feedback: email });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
};
