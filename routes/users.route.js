const router = require("express").Router();
const {
	getAllUsers,
	postRegister,
	deleteUser,
} = require("../controllers/users.controller");

router.post("/register", postRegister);
router.get("/all", getAllUsers);
router.delete("/:id", deleteUser);

module.exports = router;
