var vp = document.getElementById('villaPlatzi');
var papel = vp.getContext('2d');

var bandera = 0;
var posicionGX = new Array();
var posicionGY = new Array();

var cantidadVaca = aleatorio(1,5);
var cantidadCerdo = aleatorio(1,5);
var cantidadPollo = aleatorio(1,5);
console.log("putita "+cantidadVaca);
console.log("putitaCe "+cantidadCerdo);
console.log("putitaPol "+cantidadPollo);
document.addEventListener('keydown',movimientoLobo);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var lobito ={
  url: "Lobito.png",
  estado : false
};

var fondo ={
  url: "tile.png",
  estado : false
};

var vaca ={
  url: "vaca.png",
  estado : false
};
var cerdo ={
  url: "cerdo.png",
  estado : false
};
var pollo ={
  url: "pollo.png",
  estado : false
};

var loser = new Image();
loser.src = 'loser.png'
loser.addEventListener('load',cargarFondo);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

lobito.imagen = new Image();
lobito.imagen.src = lobito.url;
lobito.posicionX = 420;
lobito.posicionY = 0;
lobito.imagen.addEventListener("load",cargarLobo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.posicionX = new Array();
vaca.posicionY = new Array();
vaca.imagen.addEventListener('load',cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.posicionX = new Array();
cerdo.posicionY = new Array();
cerdo.imagen.addEventListener('load',cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.posicionX = new Array();
pollo.posicionY = new Array();
pollo.imagen.addEventListener('load',cargarPollo);

function cargarVaca() {
  vaca.estado = true;
  dibujar();
}

function cargarLobo() {
  lobito.estado = true;
  dibujar();
}

function cargarFondo() {
  fondo.estado = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.estado = true;
  dibujar();
}

function cargarPollo() {
  pollo.estado = true;
  dibujar();
}

function verficar(aux, aux2) {
  var res = true;
  var tam = posicionGX.length;
  console.log("AJJAJJJAJJA "+ tam);
  if (aux == 420 && aux2 == 0) {
    res = false;
    console.log("esta entrando perro");
  }
  for (var i = 0; i < tam; i++) {
    if(posicionGX[i]==aux && posicionGY[i]== aux2){
      console.log(posicionGX[i]+" "+aux+" "+posicionGY[i]+" "+aux2);
      res = false;
      break;
    }
  }
  return res;
}

function dibujar() {
  bandera = bandera + 1;
  console.log("Mariaa Angelica "+ bandera);
  if (bandera == 5) {
    if (fondo.estado) {
      papel.drawImage(fondo.imagen,0,0);
    }
    if (lobito.estado) {

      papel.drawImage(lobito.imagen,lobito.posicionX,lobito.posicionY);
    }
    if (vaca.estado) {
      console.log(cantidadVaca);
      var i = 0;
      while (i < cantidadVaca) {
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        vaca.posicionX[i] = x * 60;
        vaca.posicionY[i] = y * 60;
        var res;
        res = verficar(vaca.posicionX[i],vaca.posicionY[i]);
        console.log(res);
        if (res) {
          posicionGX[i]=vaca.posicionX[i];
          posicionGY[i]=vaca.posicionY[i];
          papel.drawImage(vaca.imagen,vaca.posicionX[i],vaca.posicionY[i]);
          i++;
        }
      }
    }
    if (cerdo.estado) {
      console.log(cantidadCerdo);
      var i = 0;
      while (i<cantidadCerdo) {
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        cerdo.posicionX[i] = x * 60;
        cerdo.posicionY[i] = y * 60;
        var res;
        res = verficar(cerdo.posicionX[i],cerdo.posicionY[i]);
        console.log(res);
        if (res) {
          posicionGX[i+cantidadVaca]=cerdo.posicionX[i];
          posicionGY[i+cantidadVaca] = cerdo.posicionY[i];
          papel.drawImage(cerdo.imagen,cerdo.posicionX[i],cerdo.posicionY[i]);
          i++;
        }
      }
    }
    if (pollo.estado) {
      console.log(cantidadPollo);
      var i = 0;
      while (i<cantidadPollo) {
        var x = aleatorio(0,7);
        var y = aleatorio(0,7);
        pollo.posicionX[i] = x * 60;
        pollo.posicionY[i] = y * 60;
        var res;
        res = verficar(pollo.posicionX[i],pollo.posicionY[i]);
        console.log(res);
        if (res) {
          posicionGX[i+cantidadVaca+cantidadCerdo] = pollo.posicionX[i];
          posicionGY[i+cantidadVaca+cantidadCerdo] = pollo.posicionY[i];
          papel.drawImage(pollo.imagen,pollo.posicionX[i],pollo.posicionY[i]);
          i++;
        }
      }
    }
  }
}

function mantenerPosicion(x,y) {
  var once = true;

  lobito.posicionX = lobito.posicionX + x;
  lobito.posicionY = lobito.posicionY + y;
  for (var i = 0; i < posicionGX.length; i++) {
    if ((lobito.posicionX == posicionGX[i]) && (lobito.posicionY == posicionGY[i])) {
      alert("Te comiste un animalito");
      once = false;
      papel.drawImage(loser,0,0);
    }
  }
  if (once) {
    papel.drawImage(fondo.imagen,0,0);
    papel.drawImage(lobito.imagen,lobito.posicionX,lobito.posicionY);
    for (var i = 0; i < cantidadVaca; i++) {
      papel.drawImage(vaca.imagen,vaca.posicionX[i],vaca.posicionY[i]);
    }
    for (var i = 0; i < cantidadCerdo; i++) {
      papel.drawImage(cerdo.imagen,cerdo.posicionX[i],cerdo.posicionY[i]);
    }
    for (var i = 0; i < cantidadPollo; i++) {
      papel.drawImage(pollo.imagen,pollo.posicionX[i],pollo.posicionY[i]);
    }
  }

}

function movimientoLobo(evento)
{
    var colorcito = 'Blue';
    var movimiento = 70;

    switch (evento.keyCode) {
    case teclas.UP:
      mantenerPosicion(0,-60);
      console.log("Arriba");
    break;

    case teclas.DOWN:
      mantenerPosicion(0,60);
      console.log("Abajo");
    break;

    case teclas.LEFT:
      mantenerPosicion(-60,0);
      console.log("Izquierda");
    break;

    case teclas.RIGHT:
      mantenerPosicion(60,0);
      console.log("Derecha");
    break;

    default:
      console.log("Otra tecla");
  }
}

function reinicio() {



}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor( Math.random()*(max-min+1) )+min;
    return resultado;
}
