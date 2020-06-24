var base = document.getElementById('cuadrito');
var papel = base.getContext("2d");
var x = 150;
var y = 150;
var colorcito = "Blue";
var estado = 0;

dibujarLinea("Red",x-1,y-1,x+1,y+1,papel);
dibujarLinea('Red',1,1,1,299,papel);
dibujarLinea('Red',1,299,299,299,papel);
dibujarLinea('Red',1,1,299,1,papel);
dibujarLinea('Red',299,1,299,299,papel);


document.addEventListener("mousedown",dibujandoDown);
document.addEventListener("mousemove",dibujandoMove);
document.addEventListener("mouseup",dibujandoUp)

function dibujandoMove(holi) {
  if (estado==1) {
    dibujarLinea(colorcito,x,y,holi.offsetX,holi.offsetY,papel);
    x=holi.offsetX;
    y=holi.offsetY;
  }

}
function dibujandoUp(hola) {
  estado=0;
  dibujarLinea(colorcito,x,y,hola.offsetX,hola.offsetY,papel);
  x=hola.offsetX;
  y=hola.offsetY;
}

function dibujandoDown(hola) {
  estado=1;
  dibujarLinea(colorcito,x,y,hola.offsetX,hola.offsetY,papel);
  x=hola.offsetX;
  y=hola.offsetY;
}

function dibujarLinea(color, xi,yi,xf,yf,lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth=3;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();

}
