const express = require("express");
const mongoose = require("mongoose");
const cookiesParser = require("cookie-parser");
const cors = require("cors");
mongoose
  .connect(
    `mongodb+srv://E-Commarce:E-Commarce-Client@cluster0.1ssdisl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Hlw woruld,Data Base is Connected"))
  .catch((error) => console.log(error));
const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    alloedHeaders: [
      "Content-Type",
      "Authrization",
      "Cache-Control",
      "Expirse",
      "pragma ",
    ],
    credentials: true,
  })
);

app.use(cookiesParser());
app.use(express.json());
app.listen(PORT, () => console.log(`server is Running ${PORT}`));
