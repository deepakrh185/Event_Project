// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

async function connectDataBase() {
  const client = await MongoClient.connect(
    "mongodb+srv://eventApp:bLpmUIZOpyXXyud1@cluster0.ggsug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  return client;
}
async function assigningData(client, document) {
  const db = client.db();
  await db.collection("emails").insertOne(document);
}
export default async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    let client;
    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: "Connection to the database failed" });
    }
    try {
      await assigningData(client, { email: email });
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed" });
    }
    res.status(201).json({ message: "Success", feedback: email });
  }
  client.close();
};
