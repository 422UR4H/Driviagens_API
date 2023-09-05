import { Router } from "express";
import { createPassenger } from "../controllers/passenger.controllers.js";
import { passengerSchema } from "../schemas/passenger.schemas.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router();

router.post("/passengers", validateSchema(passengerSchema), createPassenger);

export default router;