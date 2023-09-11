import httpStatus from "http-status";
import isEmpty from "../utils/isEmpty.js";

export default function validateSchema(schema) {
    return (req, res, next) => {
        const { body, query } = req;
        if (isEmpty(body) && isEmpty(query)) return next();

        const { error } = schema.validate(!isEmpty(body) ? body : query, { abortEarly: false });
        if (error) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(
            { message: error.details.map(d => d.message) }
        );
        next();
    }
}