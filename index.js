const express = require("express");
const cors = require("cors");
const routes = require("./routes/apis");
const dbConnect = require("./config/db.config");

dbConnect.sync();

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

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

module.exports = app;