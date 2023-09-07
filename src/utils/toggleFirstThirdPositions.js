export default function toggleFirstThirdPositions(date) {
    const c = date.match(/[^0-9]/)[0];
    const newDate = date.split(c);

    if (newDate.length > 3) return {
        type: "error",
        message: "toggle only three positions"
    };
    return [newDate[2], newDate[1], newDate[0]].join(c);
}