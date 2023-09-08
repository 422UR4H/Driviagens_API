import { Router } from "express";
import { passengerSchema } from "../schemas/passenger.schemas.js";
import { passengerController } from "../controllers/passenger.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router();

router.post("/passengers", validateSchema(passengerSchema), passengerController.create);
router.get("/passengers/travels", passengerController.readAll);

export default router;