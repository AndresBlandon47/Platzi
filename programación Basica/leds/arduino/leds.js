var five = require("johnny-five");
var circuito = new five.Board({
    port: "COM4"
});

circuito.on("ready", prender);

function prender() {
    var bombillito = new five.Led(8);
    var amarillito = new five.Led(13);
    amarillito.blink(1000);
    bombillito.blink(1000);
    console.log('hola mama');
    
}