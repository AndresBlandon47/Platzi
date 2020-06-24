var imagenes = [];
imagenes["cauchin"] = 'vaca.png';
imagenes["pokacho"] = 'pollo.png';
imagenes["tocinauro"] = 'cerdo.png';

var coleccion= [];
coleccion.push( new Pakiman('cauchin', 100, 30));
coleccion.push( new Pakiman('pokacho', 80, 50));
coleccion.push( new Pakiman('tocinauro', 120,40));

for (i of coleccion) {
  i.mostrar();
  console.log(i);
}
for (var x in coleccion[0]) {
  console.log(x);
}
