const express = require("express");
const cors = require("cors");
const routes = require("./routes/apis");
const dbConnect = require("./config/db.config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://cedarclinic.co.ke",
    "https://www.cedarclinic.co.ke"
  ],
  credentials: true,
}));

app.use(express.json());
app.use("/api", routes);
async function startServer() {
  try {
    await dbConnect.authenticate();
    await dbConnect.sync(); // safe default (NO force)

    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });

  } catch (err) {
    console.error("DB connection error:", err);
  }
}

startServer();

module.exports = app;