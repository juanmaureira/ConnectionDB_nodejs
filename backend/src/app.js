const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const { getUsers, loginUsers } = require("./controllers");
const {
  useMiddleWareUnless,
  authenticate,
  authorize,
} = require("./middlewares");

port = 3000;

app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../../public")));

app.use(useMiddleWareUnless(["/", "/login", "/register"], authenticate)); // Authenticate
app.use(useMiddleWareUnless(["/", "/login", "/register"], authorize)); // Authorize

app.listen(port, () => console.log(`Server ruinning at port ${port}`));

app.post("/login", loginUsers);
app.get("/users", getUsers);
