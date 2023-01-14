const express = require("express");
var cors = require("cors");
const userRoutes = require("./routes/users.route");

const mongoose = require("mongoose");

const DB_URI = "mongodb://127.0.0.1:27017";

const app = express();
const PORT = 8082;
mongoose.set("strictQuery", false);
mongoose
	.connect(DB_URI)
	.then(() => console.log("Connected to DB at", DB_URI))
	.catch((error) => console.log("Failed to connect to DB\n", error));

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
	console.log("Server Listening at", PORT);
});
