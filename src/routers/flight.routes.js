import { Router } from "express";
import { flightSchema } from "../schemas/flight.schemas.js";
import { flightController } from "../controllers/flight.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router();

router.post("/flights", validateSchema(flightSchema), flightController.create);

export default router;