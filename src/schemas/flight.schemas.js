import JoiTemp from "joi";
import JoiDate from "@joi/date";

const Joi = JoiTemp.extend(JoiDate);

export const flightSchema = Joi.object({
	origin: Joi.number().integer().required(),
	destination: Joi.number().integer().required(),
	date: Joi.date().format('DD-MM-YYYY').greater('now').required()
});

export const flightQuerySchema = Joi.object({
	"smaller-date": Joi.date().format('DD-MM-YYYY'),
	"bigger-date": Joi.date().format('DD-MM-YYYY'),
	origin: Joi.string().min(2).max(50),
	destination: Joi.string().min(2).max(50),
	page: Joi.number().integer()
});