var alice = {
    name : "Alice",
    dob : new Date(2001, 3, 4),
    height : 165,
    weight : 68
};
var bob = {
 name : "Robert",
 dob : new Date(1997, 0, 31),
 height : 170,
 weight : 88
};
var charly = {
 name : "Charles",
 dob : new Date(1978, 9, 15),
 height : 188,
 weight : 102
};
var lucy = {
 name : "Lucía",
 dob : new Date(1955, 7, 7),
 height : 155,
 weight : 61
};
var peter = {
 name : "Peter",
 dob : new Date(1988, 2, 9),
 height : 165,
 weight : 99
};
var luke = {
 name : "Lucas",
 dob : new Date(1910, 11, 4),
 height : 172,
 weight : 75
};

var array = [alice,bob,charly,lucy,peter,luke];

const fs = require('fs');

fs.writeFileSync('./people.json',JSON.stringify(array,null,2)); 


