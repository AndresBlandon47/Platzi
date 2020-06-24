var contador = 0

lluve = () => Math.random() < 0.25

do{
	contador++
}while(!lluve())

console.log(`fui a ver si llovia ${contador} ${contador == 1 ? 'vez':'veces' }`)