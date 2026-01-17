const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController.js")

router.get("/users/All",userController.getAllUsers)
router.get("/users/:id", userController.getUser)
router.post("/users/create", userController.createUser)
router.put("/users/update", userController.updateUser)
router.delete("/users/delete", userController.deleteUser)

module.exports = router;