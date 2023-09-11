import Joi from "joi";

export const biggerSmallerDatesSchema = Joi.object({
	smallerDate: Joi.date(),
	biggerDate: Joi.date()
});