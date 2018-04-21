const geometry = require("./geometry");
const utilities = require("./utilities");

console.log(geometry.volumeOfRectangularPrism(5, 10, 15));
console.log(geometry.volumeOfRectangularPrism(10, 10, 10));
console.log(geometry.volumeOfRectangularPrism(5, 10, 100));
console.log(geometry.volumeOfRectangularPrism(100, 10, 5));
console.log(geometry.volumeOfRectangularPrism(5, 100, 10));
console.log("");
console.log(geometry.surfaceAreaOfRectangularPrism(5, 10, 15));
console.log(geometry.surfaceAreaOfRectangularPrism(10, 10, 10));
console.log(geometry.surfaceAreaOfRectangularPrism(5, 10, 100));
console.log(geometry.surfaceAreaOfRectangularPrism(100, 10, 5));
console.log(geometry.surfaceAreaOfRectangularPrism(5, 100, 10));
console.log("");
console.log(geometry.volumeOfSphere(5));
console.log(geometry.volumeOfSphere(10));
console.log(geometry.volumeOfSphere(100));
console.log(geometry.volumeOfSphere(7.62));
console.log(geometry.volumeOfSphere(76.2));
console.log("");
console.log(geometry.surfaceAreaOfSphere(5));
console.log(geometry.surfaceAreaOfSphere(10));
console.log(geometry.surfaceAreaOfSphere(100));
console.log(geometry.surfaceAreaOfSphere(7.62));
console.log(geometry.surfaceAreaOfSphere(76.2));
console.log("");

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
const fourth = {a: 3, b: 2};
console.log(utilities.deepEquality(first, second));
console.log(utilities.deepEquality(first, third));
console.log(utilities.deepEquality(first, fourth));
console.log(utilities.deepEquality(second, third));
console.log(utilities.deepEquality(second, fourth));
console.log("");

const testArr1 = ["a", "a", "b", "a", "b", "c"];
const testArr2 = ["a", "b", "b", "a", "b", "a"];
const testArr3 = ["a", "b", "c", "d", "e", "f"];
const testArr4 = ["u", "v", "w", "x", "y", "z"];
const testArr5 = ["a", "a", "a", "a", "a", "a"];
console.log(utilities.uniqueElements(testArr1));
console.log(utilities.uniqueElements(testArr2));
console.log(utilities.uniqueElements(testArr3));
console.log(utilities.uniqueElements(testArr4));
console.log(utilities.uniqueElements(testArr5));
console.log("");


const testStr1 = "Hello, the pie is in the oven";
const testStr2 = "This week, you will be creating your first package and first module!";
const testStr3 = "This file will export 4 methods.";
const testStr4 = "Each method will have error checking on each argument.";
const testStr5 = "Would result in charMap having the value of:";
const charMap1 = utilities.countOfEachCharacterInString(testStr1);
const charMap2 = utilities.countOfEachCharacterInString(testStr2);
const charMap3 = utilities.countOfEachCharacterInString(testStr3);
const charMap4 = utilities.countOfEachCharacterInString(testStr4);
const charMap5 = utilities.countOfEachCharacterInString(testStr5);
charMap1.forEach(function (value, key, mapObj)
{
    console.log(key + ": " + value);
});
console.log("");
charMap2.forEach(function (value, key, mapObj)
{
    console.log(key + ": " + value);
});
console.log("");
charMap3.forEach(function (value, key, mapObj)
{
    console.log(key + ": " + value);
});
console.log("");
charMap4.forEach(function (value, key, mapObj)
{
    console.log(key + ": " + value);
});
console.log("");
charMap5.forEach(function (value, key, mapObj)
{
    console.log(key + ": " + value);
});