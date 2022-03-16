// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2); 
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function multiplyFare() {
        return integer * integer;
    }
    }

const fareDoubler = function(fare) {
    return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}

const selectDifferentDrivers = function(arrayDrivers, returnDriversFunc) {
    if(returnDriversFunc === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayDrivers);
    } else {
        return returnLastTwoDrivers(arrayDrivers);
    }
   }