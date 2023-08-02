

//entrega buscar libros por nombre o por autor


// constructor


const Libro = function(nombre,autor,editorial,paginas,precio, stock){
    this.nombre =nombre
    this.autor = autor
    this.editorial = editorial
    this.paginas = paginas
    this.precio = precio
    this.precioConIva = precio * 1.19
    this.stock = stock;

}

const libro1 = new Libro("it","stephen king","plaza janes",1500,100000,5)
const libro2 = new Libro("apocalipsis","stephen king","plaza janes",1580,100000,2)
const libro3 = new Libro("insomnia","stephen king","debolsillo",900,15000,4)
const libro4 = new Libro("el estigma","john saul","javier vergara",300,15000,2)
const libro5 = new Libro("tiburon","peter benchley","javier vergara",300,5000,4)
const libro6 = new Libro("parque jurasico","michael crichton","debolsillo",400,16000,9)
const libro7 = new Libro("el fantasma de la opera","gaston leroux","alma",200,10000,30)
const libro8 = new Libro("cuentos completos","edgar allan poe","paginas de espuma",1200,35000,2)
const libro9 = new Libro("narrativa completa vol 1","h.p. lovecraft","valdemar",900,45000,1)
const libro10 = new Libro("narrativa completa vol 2","h.p. lovecraft","valdemar",1100,45000,3)
const libro11 = new Libro("be water, my friend","shanon lee","dojo",200,14000,10)
const libro12 = new Libro("el tao del jeet kune do","bruce lee","dojo",300,45000,2)


//array
const libros =[libro1,libro2,libro3,libro4,libro5,libro6,libro7,libro8,libro9,libro10,libro11,libro12]


// buscar libro por nombre
function buscarLibro(){
    let busqueda = prompt("ingrese el nombre del libro")
    let resultado= libros.filter(  (libro) => libro.nombre.includes(busqueda))
    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontró el libro " + busqueda)
    }
}

// buscar libro por autor
function buscarAutor(){
    let busqueda = prompt("ingrese el nombre del autor")
    let resultado= libros.filter(  (libro) => libro.autor.includes(busqueda))
    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontró el autor " + busqueda)
    }
}

// cantidad de todos los libros en stock
function LibrosTotal(){
    console.table(libros);
}

 
//botones
let boton = document.getElementById("nombre")
boton.addEventListener("click", buscarLibro)

let boton2 =document.getElementById("autor")
boton2.addEventListener("click", buscarAutor)

let boton3 = document.getElementById("total")
boton3.addEventListener("click", LibrosTotal)


// buscar por indice del array 
//console.log(libro3.nombre)