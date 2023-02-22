import express from "express";
import {getUser,updateUser,getUsers} from "../controllers/user.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// READ

router.get('/:id', getUser);
router.get('/', getUsers);

//UPDATE

router.patch('/:id', updateUser)

export default router;