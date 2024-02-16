import { Router } from "express";
import {
  processPayment,
  receiveWebhook,
} from "../controllers/payment.controller.js";

const router = Router();

router.post("/process_payment", processPayment);

router.post("/webhook", receiveWebhook);

router.get("/success", (req, res) => res.send("Success"));


export default router;