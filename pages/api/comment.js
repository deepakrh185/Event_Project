// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path";
import fs from "fs";

export default (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;
    const data = {
      email: email,
      name: name,
      text: text,
      id: new Date().toISOString(),
    };
    const filePath = path.join(process.cwd(), "data", "comment.json");
    const fileData = fs.readFileSync(filePath);
    const dataFile = JSON.parse(fileData);
    dataFile.push(data);
    fs.writeFileSync(filePath, JSON.stringify(dataFile));
    res.status(201).json({ message: "Success", feedback: data });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
};
