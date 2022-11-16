class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    };

    addMascota(nombreMascota) {
        (this.mascotas).push(nombreMascota);
    };

    countMascotas() {
        return (this.mascotas).length
    };

    addBook(nombreLibro, autor) {
        (this.libros).push({nombre: nombreLibro, autor: autor});
    };

    getBookNames() {
        let nombreLibros = [];
        (this.libros).forEach( libro => {
            nombreLibros.push(libro.nombre);
        });
        return nombreLibros;
    };
};

const nombre = 'Federico';
const apellido = 'Ramos';
const libros = [{nombre: 'Shrek',autor: 'DreamsWork'},{nombre: 'Pinocho',autor: 'Disney'}];
const mascotas = ['Perro','Gato','Conejo'];

const usuario = new Usuario(nombre,apellido,libros,mascotas);
console.log('Nombre completo del usuario (string):')
console.log(usuario.getFullName()); 
console.log('Mascotas que el usuario tiene inicialmente (number):')
console.log(usuario.countMascotas()); 
console.log('Agrego string "hamster".')
usuario.addMascota('hamster');
console.log('Nueva cantidad de mascotas del usuario (number):');
console.log(usuario.countMascotas());
console.log('Nombres de los libros(array):');
console.log(usuario.getBookNames());
console.log('Agrego un nuevo libro (objeto) con 2 string como parámetros.')
usuario.addBook('Deuda soberana','Alejandro Olmos Gaona');
console.log('Nombre de los libros tras agregar uno nuevo (array):');
console.log(usuario.getBookNames());