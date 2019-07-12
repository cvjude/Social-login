import express from "express";
import bodyParser from "body-parser";
import router from "./router";
import cors from "cors";
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/", router);

const port = 5001;
app.listen(port, () => {
  console.log("server is working");
});

export default app;
