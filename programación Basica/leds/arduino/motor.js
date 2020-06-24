var cinco = require("johnny-five");
var circuito = new cinco.Board({
    port: "COM4"
});
var motorcito;

circuito.on('ready',prender);
function prender() {
    var bombillo = new cinco.Led(13);
    bombillo.on();
    motorcito = new cinco.Servo(9);
    
}