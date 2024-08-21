
const botonAbrir = document.querySelector(".abrir");
const botonCerrar = document.querySelector(".cerrar");
const menu = document.querySelector(".navegacion-enlaces");
botonAbrir.addEventListener('click', (e) => {
    menu.classList.add("navegacion-enlaces-open");
    botonCerrar.style.display = "flex";
    botonAbrir.style.display = "none";
})
botonCerrar.addEventListener('click', (e) => {
    menu.classList.remove("navegacion-enlaces-open");
    botonCerrar.style.display = "none";
    botonAbrir.style.display = "flex";
})


