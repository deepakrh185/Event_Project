// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  connectToDataBase,
  connectCredentials,
  getAllDocuments,
} from "../../../helper/db-api";

export default async (req, res) => {
  const eventId = req.query.eventId;
  let client;
  try {
    client = await connectToDataBase();
  } catch (error) {
    res.status(500).json({ message: "failed to connect db" });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "comment not found" });
      client.close();
      return;
    }
    const totalData = {
      email,
      name,
      text,
      eventId,
    };
    let result;
    try {
      result = await connectCredentials(client, "comment", totalData);
      totalData._id = result.insertedId;
      res.status(201).json({ message: "Success", feedback: totalData });
    } catch (error) {
      res.status(500).json({ message: "failed to connect data to db" });
    }
    console.log(result);
  } else if (req.method === "GET") {
    try {
      const getData = await getAllDocuments(
        client,
        "comment",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comment: getData });
    } catch (error) {
      res.status(500).json({ message: "getting comments failed" });
    }
  }
  client.close();
};
