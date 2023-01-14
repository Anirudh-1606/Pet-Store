const Users = require("../models/users.model");

class UserService {
	register = async (user) => {
		try {
			const { imageUrl, email, username, review } = user;
			const newUser = new Users({ imageUrl, email, username, review });
			const result = await newUser.save();
			return result;
		} catch (error) {
			throw error;
		}
	};

	findAll = async () => {
		const userResult = await Users.find({});
		return userResult;
	};

	delete = async (documentId) => {
		const deletedDoc = await Users.findOneAndDelete(documentId);
		return deletedDoc;
	};
}

module.exports = UserService;
