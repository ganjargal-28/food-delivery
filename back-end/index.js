import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(cors());
app.get("/", (request, response) => {
  response.json({
    right: "hello"
  });
});
app.listen(PORT, () => {
  console.log(`http//localhost:${PORT}`);
});
