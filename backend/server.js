// initialize dotenv variables
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// const connectDatabase = require("./config/database");
// configure the dotenv variable
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

// listen on port env
app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
