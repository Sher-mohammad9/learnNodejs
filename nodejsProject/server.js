const app = require("./application/app.js");
const PORT = 4500;
const IP = "localhost";
app.listen(PORT, IP, ()=>console.log(`server start at port ${PORT}`));