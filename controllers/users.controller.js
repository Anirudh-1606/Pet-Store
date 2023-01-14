const UserService = require("../services/users.service");
const UserServiceInstance = new UserService();

const postRegister = async (req, res) => {
	try {
		const result = await UserServiceInstance.register(req.body);
		res.json(result);
	} catch (error) {
		if (error.code === 11000) {
			res.status(409).json({
				message: "Failed to create new user",
				reason: "Already Exists in DB",
			});
		} else {
			res.status(500).json({ message: "Failed to create new user", error });
		}
	}
};

const getAllUsers = async (req, res) => {
	try {
		const userResult = await UserServiceInstance.findAll();
		if (userResult) {
			res.json(userResult);
		} else {
			res.status(404).json({ message: "No Users found" });
		}
	} catch (error) {
		res.status(500).json({ message: "Error fetching user details", error });
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await UserServiceInstance.delete(id);
		res.json(result);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Couldn't delete blog post. Please try again", error });
	}
};

module.exports = { postRegister, deleteUser, getAllUsers };
