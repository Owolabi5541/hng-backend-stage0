// server.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors()); //Not needed for this project but good practice
app.use(morgan("dev"));
app.use(
  rateLimit({
    windowMs: 60 * 1000, //1 minute
    max: 20, //limit each IP to 20 requests per minute
  })
);

app.get("/me", async (req, res) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
  
    //using json response automatically sets Content-Type to application/json
    res.status(200).json({ 
      status: "success",
      user: {
        email: "owolabiidris4@gmail.com",
        name: "Owolabi Idris Yusuf",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: data.fact,
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Failed to fetch cat fact" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
