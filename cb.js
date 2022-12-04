let sayHello = () => console.log("Hello");

function repeatHello(callback){
setInterval(callback, 1000);
}

repeatHello(sayHello);

/* si utilizza l'arrow functionc ome argomento della nostra fuznzione repeatHello,
la quale passerà i dati direttamente al metodo setInterval.
tutto ciò permetterà la lettura di sayHello come callback function */