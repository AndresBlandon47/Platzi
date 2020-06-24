var texto = document.getElementById('texto_lineas');
var boton = document.getElementById('Botoncito');
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujoPorClick(){
  lienzo.clearRect(0,0,d.width,d.height);
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = 'Red';
  var espacio = ancho / lineas;

  for(l=0;l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    z = 300-yi;
    b = 300-xf;
    dibujarLinea(colorcito,0,yi,xf,300);
    dibujarLinea(colorcito,300,xf,yi,0);
    dibujarLinea(colorcito,0,xf,z,0);
    dibujarLinea(colorcito,yi,300,300,b);

  }

  for(angelica=0;angelica < (lineas/3); angelica++){
    var Baby='Blue';
    yi = espacio * angelica;
    xf = espacio * (angelica+1);
    ojoi=50+yi;
    ojof=150+xf;

    ojoin = 150 - yi;
    ojofin = 250- xf;

    dibujarLinea(Baby,150,ojoi,ojof,150);
    dibujarLinea(Baby,150,ojof,ojoi,150);
    dibujarLinea(Baby,150,ojoi,ojoin,150);
    dibujarLinea(Baby,ojof,150,150,ojofin);

    dibujarLinea(Baby,150,50,150,250);
    dibujarLinea(Baby,50,150,250,150);
  }



  dibujarLinea('Red',1,1,1,299);
  dibujarLinea('Red',1,299,299,299);
  dibujarLinea('Red',1,1,299,1);
  dibujarLinea('Red',299,1,299,299);
}

function dibujarLinea(color, xi,yi,xf,yf){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi,yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();

}
