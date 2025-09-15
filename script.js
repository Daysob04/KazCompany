addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 1000

    const animarContadores = () => {
        for (const contador of contadores) {
            const actualizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                    valor_actual = +contador.innerText,
                    incremento = cantidad_maxima / velocidad

                if (valor_actual < cantidad_maxima) {
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actualizar_contador, 5)

                } else {
                    contador.innerText = cantidad_maxima
                }
            }

            actualizar_contador()
            
        }
    }

    //intersectionObserver

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContadores, 1500)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 - 1
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML)
    })
})



var mybutton = document.getElementById("scrollBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





/*const elementosAObservar = document.querySelectorAll('.carta10');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animar1'); // Añade una clase CSS con la animación
    } else {
      entry.target.classList.remove('animar1'); // Opcional: elimina la clase para revertir al hacer scroll hacia arriba
    }
  });
}, { threshold: 0.2 }); // Ejecuta la función cuando el 10% del elemento es visible

elementosAObservar.forEach(elemento => observer.observe(elemento));*/