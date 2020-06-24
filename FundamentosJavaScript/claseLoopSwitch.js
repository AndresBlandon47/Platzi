var signo = prompt('¿Cuál es tu signo?')

switch(signo){
  case 'cancer':
		console.log('Hoy moriras cancer')
		break
	case 'picis':
		console.log('hoy conoceras el amor de tu vida')
		break
	case 'acuario':
		console.log('hoy mueres ahogado')
		break
	case 'sagitario':
	case 'sanitario':
	//lo que quiere probar es con cualquiera de esas dos opciones se impirmiria esto, por lo tanto es importante el break
	
		console.log('hoy mueres por un animal')
		break
	default:
		console.log('que es esa monda')
}