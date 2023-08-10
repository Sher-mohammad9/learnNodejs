const dotEnv = require("dotenv");
dotEnv.config({ path: "config.env" });
process.env.PORT = process.env.PORT || 8080;
module.exports = process.env;