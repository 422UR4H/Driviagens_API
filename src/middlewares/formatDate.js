import toggleFirstThirdPositions from "../utils/toggleFirstThirdPositions.js";

export default function formatDate(req, res, next) {
    const { date } = req.body;
    if (date) req.body.date = toggleFirstThirdPositions(date);

    const { 'smaller-date': smallerDate, 'bigger-date': biggerDate } = req.query;
    if (smallerDate || biggerDate) {
        req.query.smallerDate = toggleFirstThirdPositions(smallerDate);
        req.query.biggerDate = toggleFirstThirdPositions(biggerDate);
        delete req.query['smaller-date'];
        delete req.query['bigger-date'];
    }
    next();
}