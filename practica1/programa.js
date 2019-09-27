//primero comprobar argumento 
//se ejecuta node programa.js fichero.csv
//tengo que comprobar que fichero.csv se pase siempre
//let const
const fs = require('fs')  
const Persona = require('./Persona')

if(process.argv.length < 3){
    console.log("debe contener un argumento")
    process.exit()
}

console.log("parametros correctos")

let archivo = process.argv.slice(2)[0]
console.log(archivo)


fs.readFile(archivo, 'utf-8', (err, data) => { 
    if(err) {
        console.log('error: no existe el archivo ')
      } else {
        //console.log(data.toString())
      } 
}) 

let person = new Persona("Antonio","Jimenez Arias","hola@hola.com","hombre");
console.log(person.toString())

//array de objetos persona 
/*
fichero aparte
funcion que me devuelva array de male o female (pasamos genero)
funcion numero de correos que tenga la .com .... REGEX (pasamos .com ...)
funcion pasamos 2 x,y letras tiene que empezar el nombre por x y el apellido por y
*/