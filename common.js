const {calculateArea,calculatePerimeter}= require('./main');
//importing the function from main.js that uses export module.exports
console.log(calculateArea(5));
console.log(calculatePerimeter(5));
import isVote from './esm.js';
//importing the function from esm.js that uses export default(es module)
console.log(isVote(20));