var five = require("johnny-five"),
  board, motor,amarillito,celda;

board = new five.Board({
    port: "COM4"
});

function mover() {
    console.log("Luz: " , celda.value);
    var luz = celda.value;
    if(luz < 600){
        motor.start();
    }else{
        motor.stop();
    }
    setTimeout(mover, 1000); 
}
board.on("ready", function() {
  // Create a new `motor` hardware instance.
  motor = new five.Motor({
    pin: 9
  });
  var configuracion = {pin:"A0", freq: 50};
  celda = new five.Sensor(configuracion);
  amarillito = new five.Led(13);

  mover();

  // "start" events fire when the motor is started.
  motor.on("start",prender);
  function prender() {
    console.log("start", Date.now());
    amarillito.on();
  };

  // "stop" events fire when the motor is stopped.
  motor.on("stop", function() {
    console.log("stop", Date.now());
    amarillito.off();
    })
  });
