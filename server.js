
// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION / enviorment variable created then our port is asigned to port
require("dotenv").config();
const PORT = process.env.PORT;

// LISTENER TO SPECIFIC PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});