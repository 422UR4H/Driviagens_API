import Joi from "joi";

export const flightSchema = Joi.object({
	origin: Joi.number().integer().required(),
	destination: Joi.number().integer().required(),
	date: Joi.date().greater('now').required()
});

export const flightQuerySchema = Joi.object({
	smallerDate: Joi.date(),
	biggerDate: Joi.date(),
	origin: Joi.string().min(2).max(50),
	destination: Joi.string().min(2).max(50)
});