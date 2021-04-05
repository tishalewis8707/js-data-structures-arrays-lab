// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function  destructivelyAppendDriver (name) {
drivers.push(name)
}
// removes the last driver from the drivers array

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}
//adds to beginning of the drivers array

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}
//

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver(name) {
    const driversArray = [...drivers,name];
    return driversArray;
}
//returns a new array, leaving the drivers array unchanged

function prependDriver(name) {
    const driversArray = [name,...drivers];
    return driversArray; 
}
//array unchanged 

function removeLastDriver(name) {
    const driversArray = [...drivers];
    driversArray.pop();
    return driversArray;
}

function removeFirstDriver(name) {
    const driversArray = [...drivers];
    driversArray.shift();
    return driversArray;
}