// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDataBase, connectCredentials } from "../../helper/db-api";

export default async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    let client;
    try {
      client = await connectToDataBase();
    } catch (error) {
      res.status(500).json({ message: "failed to connect with db" });
    }
    try {
      await connectCredentials(client, "email", { email: email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "failed to sent data" });
    }

    res.status(201).json({ message: "Success", feedback: email });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
};
