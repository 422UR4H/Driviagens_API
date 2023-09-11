import { Router } from "express";
import { flightSchema, flightQuerySchema } from "../schemas/flight.schemas.js";
import { flightController } from "../controllers/flight.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import formatDate from "../middlewares/formatDate.js";

const router = Router();

router.post("/flights", formatDate, validateSchema(flightSchema), flightController.create);
router.get("/flights", formatDate, validateSchema(flightQuerySchema), flightController.readAll);

export default router;