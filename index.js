const routes = require("./routes/apis");
const express = require("express");
const dbConnect  = require('./config/db.config');
dbConnect.sync()
const app = express();


app.use(express.json());
app.use("/api", routes);
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
    "http://localhost:5173",
   'https://cedar-clinic.onrender.com/',
  'https://cedarclinic.co.ke'
    ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

module.exports = app;
