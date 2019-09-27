module.exports = class Persona{

    constructor(nombre, apellidos, mail, genero){
        this.nombre = nombre
        this.apellidos = apellidos
        this.mail = mail
        this.genero = genero
    }

    toString(){
        return "Nombre : " + this.nombre + ", Apellidos : " + this.apellidos + ", Email : " + this.nombre + ", Genero : " + this.genero;
    }
    

}
