const tasks = require("./routes/tasks");
const db = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

db.connect((err) => {
  if (err) {
    throw err;
  }

  console.log("MySQL Connected");
});

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
