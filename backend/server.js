import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Parallel lines",
      content:
        "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    },
    {
      id: 3,
      title: "Elevator joke",
      content: "I took my dog to the elevator. He said, 'This is a step up!'",
    },
    {
      id: 4,
      title: "Time flies",
      content: "Time flies like an arrow. Fruit flies like a banana.",
    },
    {
      id: 5,
      title: "Math teacher's favorite tree",
      content: "What’s a math teacher’s favorite tree? Geometry.",
    },
  ];
  res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
