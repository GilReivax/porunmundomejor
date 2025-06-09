// JavaScript Document
document.addEventListener('DOMContentLoaded', () => {
    const articulos = document.querySelectorAll('.troya');
  
    articulos.forEach(articulo => {
      const objetosDeClick = articulo.querySelectorAll('.boton1');
      const objetoOculto = articulo.querySelector('.cajatroya');
  
      if (objetoOculto) {
        objetosDeClick.forEach(elemento => {
          elemento.addEventListener('click', () => {
            if (objetoOculto.style.display === 'none' || objetoOculto.style.display === '') {
              objetoOculto.style.display = 'block';
            } else {
              objetoOculto.style.display = 'none';
            }
          });
        });
      }
    });
  });