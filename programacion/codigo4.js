let producto = prompt("¿Que producto llevas?")
let precio = parseInt(prompt("¿Cuanto cuesta?"))
let descuento = parseInt(prompt("¿De cuanto es el descuento?"))
let precio1 = precio * descuento / 100
let precio_final = precio - precio1
alert ("te quedaria en: " + precio1)  