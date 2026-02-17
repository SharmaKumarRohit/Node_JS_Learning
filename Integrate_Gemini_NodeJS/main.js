const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
}

app.get("/", (req, res) => {
  res.send("Integrating Gemini in NodeJS");
});

app.get("/api/content", async (req, res) => {
  const { question } = req.body;
  try {
    const response = await main(question);
    res.send({ response });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => console.log("Server is up and running on port 3000"));
