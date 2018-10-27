import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();

const userCtrl = new UserController();

router.get("/", userCtrl.getUsers);
router.post("/", userCtrl.createUser);
router.get("/:id", userCtrl.getUser);
router.put("/:id", userCtrl.editUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;