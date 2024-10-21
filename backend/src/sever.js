import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";

// initializing the express app and setting up the port, path and log variables
const app = express();
const log = console.log;
const path = dirname(fileURLToPath(import.meta.url));
const port = 3001;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => {
  log("server running successfully on port 3001 sir !");
});