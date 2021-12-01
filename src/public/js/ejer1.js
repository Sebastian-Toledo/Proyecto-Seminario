//EJERCICIO 1
var jsonStr = '['+ '{"name":"Alice","dob": "20010304T00:00:00.000Z","h": 165,"w": 68},' 
    + '{"name":"Robert","dob": "19970131T00:00:00.000Z","h": 170,"w": 88},'
    + '{"name":"Charles","dob": "19781015T00:00:00.000Z","h": 188,"w": 102},'
    + '{"name":"Lucía","dob": "19550807T00:00:00.000Z","h": 155,"w": 61},'
    + '{"name":"Peter","dob": "19880309T00:00:00.000Z","h": 165,"w": 99},'
    + '{"name":"Lucas","dob": "19101204T00:00:00.000Z","h": 172,"w": 75}]';
function overweightNames(people){
    return people
        .filter(p => (p.w / Math.pow(p.h / 100, 2)) > 25)
        .map(p => p.name)
        .reduce((n1, n2) => n1 + ", " + n2);
}