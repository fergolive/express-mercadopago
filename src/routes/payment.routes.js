import { Router } from "express";
import {
  processPayment,
  receiveWebhook,
  downloadVideo
} from "../controllers/payment.controller.js";

const router = Router();

router.get("/download", downloadVideo);

router.post("/process_payment", processPayment);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));


export default router;