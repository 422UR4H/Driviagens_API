import Joi from "joi";

export const biggerSmallerDatesSchema = Joi.object({
	smallerDate: Joi.date().iso(),
	biggerDate: Joi.date().iso()
});