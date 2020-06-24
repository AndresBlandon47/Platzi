var imagenes = [];
imagenes["100"] = '100.png';
imagenes["50"] = 'billete50.png';
imagenes["20"] = '20.png';
imagenes["10"] = '10.png';
imagenes["5"] = '5.png';

class Billete {
  constructor(v, c) {
    this.valor=v;
    this.cantidad=c;
    this.imagen= new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

function entregarDinero() {
  resultado.innerHTML="";
  ja.innerHTML="";
  entregado =[];
  var t = document.getElementById('dinero');
  dinero = parseInt(t.value);

  for (var b of caja) {
    if (dinero>0) {
      div = Math.floor(dinero/b.valor);
      if (div > b.cantidad) {
        papeles=b.cantidad;
      }else{
        papeles=div;
      }
      entregado.push(new Billete(b.valor,papeles));
      dinero = dinero - (b.valor*papeles);
    }
  }
  if (dinero > 0) {
    resultado.innerHTML = "Estoy malo";
  }else{
    for (var e of entregado) {
      console.log(e);
      if (e.cantidad > 0) {
        ja.appendChild(e.imagen);
        resultado.innerHTML += e.cantidad + " Billetes de $ "+ e.valor+"</Br>";
      }
    }
  }
}
var caja =[];
var entregado = [];
caja.push( new Billete(100,5));
caja.push( new Billete(50,10));
caja.push( new Billete(20,5));
caja.push( new Billete(10,10));
caja.push( new Billete(5,5));

var dinero = 0;
var div;
var papeles;

var resultado = document.getElementById('resultado');
var bs=document.getElementById('extraer');
var ja = document.getElementById("hola");
bs.addEventListener('click',entregarDinero);

