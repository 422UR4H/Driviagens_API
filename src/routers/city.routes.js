import { Router } from "express";
import { cityController } from "../controllers/city.controllers.js";
import { citySchema } from "../schemas/city.schemas.js";
import validateSchema from "../middlewares/validateSchema.js";

const router = Router();

router.post("/cities", validateSchema(citySchema), cityController.create);

export default router;