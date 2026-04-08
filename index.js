const routes = require("./routes/apis");
const express = require("express");
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
  'https://www.cedarclinic.co.ke',
  'https://cedarclinic.co.ke'
    ];
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  }));
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

module.exports = app;
