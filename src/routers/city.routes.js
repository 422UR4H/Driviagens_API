import { Router } from "express";
import { citySchema } from "../schemas/city.schemas.js";
import { cityController } from "../controllers/city.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router();

router.post("/cities", validateSchema(citySchema), cityController.create);

export default router;