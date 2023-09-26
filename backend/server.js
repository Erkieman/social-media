import * as dotenv from 'dotenv';
import express from "express";
import cors from "cors";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/oauth2callback", (req, res) => {
  res.send(200, req.body);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port} and clientid is ${process.env.GOOGLE_CLIENT_ID}`);
});