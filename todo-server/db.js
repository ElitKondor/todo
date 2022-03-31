// const mongoose = require("mongoose");

// module.exports = async () => {
//     try {
//         const connectionParams = {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true,
//         };
//         await mongoose.connect(
//             "mongodb://localhost/todo-app",
//             connectionParams
//         );
//         console.log("Connected to database.");
//     } catch (error) {
//         console.log("Could not connect to database.", error);
//     }
// };

const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "todo",
  password: "03032017",
});

module.exports = db;
