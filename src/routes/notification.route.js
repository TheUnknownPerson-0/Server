import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { deleteNotification, getNotification } from "../controllers/notification.controller.js";

const router = express.Router();

// public routes
// protected routes
router.get("/", protectRoute, getNotification);
router.delete("/:notificationId", protectRoute, deleteNotification);

export default router;