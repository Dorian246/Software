const productos = [
  {
    nombre: "Producto 1",
    imagen: "Desarrollo-de-software-metodologias-importantes-scaled.jpg"
  },
  {
    nombre: "Producto 2",
    imagen: "descarga.jpeg"
  },
  {
    nombre: "Producto 3",
    imagen: "software.jpeg"
  }
];

const botonCargar = document.getElementById("boton-cargar");
const contenedorImagenes = document.getElementById("contenedor-imagenes");

botonCargar.addEventListener("click", function() {
  productos.forEach(producto => {
    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    contenedorImagenes.appendChild(imagen);
  });
});
