import { Router } from "express";
import { travelSchema } from "../schemas/travel.schemas.js";
import { travelController } from "../controllers/travel.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router();

router.post("/travels", validateSchema(travelSchema), travelController.create);

export default router;