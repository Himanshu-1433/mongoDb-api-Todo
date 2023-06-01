require("./db-config/db"); // require to connect the database

const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
const app = express();
const testRoute = require("./routes/todoDash.routes");

app.use(bodyparser.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use(bodyparser.urlencoded({
    extended: false,
}));

app.use("/" , testRoute);

app.listen(PORT, (req, res) => {
    console.log("Server Are Started On Port 3000");
});
