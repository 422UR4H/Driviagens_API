import { flightService } from "../services/flight.services.js";
import httpStatus from "http-status";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.extend(customParseFormat);


async function create(req, res) {
    const { origin, destination, date } = req.body;
    await flightService.create(origin, destination, dayjs(date, "DD-MM-YYYY"));
    res.sendStatus(httpStatus.CREATED);
}

async function readAll(req, res) {
    const { page, origin, destination } = req.query;
    const { "smaller-date": smallerDate, "bigger-date": biggerDate } = req.query;
    const result = await flightService.readAll(
        page, origin, destination, dayjs(smallerDate, "DD-MM-YYYY"), dayjs(biggerDate, "DD-MM-YYYY")
    );
    result.rows.map(flight => flight.date = dayjs(flight.date).format("DD-MM-YYYY"));
    res.send(result.rows);
}

export const flightController = {
    create, readAll
}