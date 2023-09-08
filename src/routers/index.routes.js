import { Router } from "express";
import passengerRouter from "./passenger.routes.js";
import flightRouter from "./flight.routes.js";
import travelRouter from "./travel.routes.js";
import cityRouter from "./city.routes.js";

const router = Router();

router.use(passengerRouter);
router.use(flightRouter);
router.use(travelRouter);
router.use(cityRouter);

export default router;