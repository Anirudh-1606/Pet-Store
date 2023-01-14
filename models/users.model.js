const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	imageUrl: { type: String, default: "" },
	username: { type: String, unique: true, lowercase: true, required: true },
	email: { type: String, unique: true, lowercase: true, required: true },
	review: { type: String, required: true },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
