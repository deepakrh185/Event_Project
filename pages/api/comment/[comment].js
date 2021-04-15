// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    const name = req.body.name;
    const text = req.body.text;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return res.status(422).json({ message: "comment not found" });
    }
    const data = {
      email: email,
      name: name,
      text: text,
      id: new Date().toISOString(),
    };
   
    console.log(data);
    res.status(201).json({ message: "Success", feedback: data });
  } else if (req.method === "GET") {
    const dummyData = [
      { name: "deepak", content: "hope you doing well" },
      { name: "jacksparooow", content: "tan tada tan tan tan taaaa" },
    ];

    res.status(200).json({ comment: dummyData });
  }
};
