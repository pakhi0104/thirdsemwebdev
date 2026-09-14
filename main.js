function calculateArea(radius) {
    return Math.PI * radius * radius;
}
function calculatePerimeter(radius) {
    return 2 * Math.PI * radius;
}
module.exports = {
    calculateArea,
    calculatePerimeter
};
//exporting use export module