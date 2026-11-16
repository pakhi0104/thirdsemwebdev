// console way
function calculate_area(radius) {
    return 22*radius*radius / 7
}
console.log(calculate_area(7))

// call via another variable way
const p = calculate_area(5);
console.log(p)

// arrow function
const greet = (name) => {
    console.log(name);
}
console.log(greet("Nidhi"))