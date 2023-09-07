import { Router } from "express";
import { flightSchema } from "../schemas/flight.schemas.js";
import { flightController } from "../controllers/flight.controllers.js";
import { biggerSmallerDatesSchema } from "../schemas/biggerSmallerDates.schemas.js";
import validateSchema from "../middlewares/validateSchema.js";
import formatDate from "../middlewares/formatDate.js";

const router = Router();

router.post("/flights", formatDate, validateSchema(flightSchema), flightController.create);
router.get("/flights", formatDate, validateSchema(biggerSmallerDatesSchema), flightController.readAll);

export default router;