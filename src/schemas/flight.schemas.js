import Joi from "joi";

export const flightSchema = Joi.object({
	origin: Joi.number().integer().required(),
	destination: Joi.number().integer().required(),
	date: Joi.date().iso().greater('now').required()
});