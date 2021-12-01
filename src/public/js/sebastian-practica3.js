//ejercicio 1
function overweightNames(people){
    return people
    .filter(p => (p.w / Math.pow(p.h / 100, 2)) > 25)
    .map(p => p.name)
    .reduce((n1, n2) => n1 + ", " + n2);
}

//ejercicio 2

function stateChangeHandler(){
    console.log('Ready state: ' + this.readyState
    + '. Status: ' + this.status + ' ' + this.statusText
    + '. Response: ' + this.responseText);
}

//ejercicio 3


