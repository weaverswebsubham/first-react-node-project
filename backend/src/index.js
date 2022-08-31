require('dotenv').config();
const express = require("express");
const app = express();

// Server.
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
