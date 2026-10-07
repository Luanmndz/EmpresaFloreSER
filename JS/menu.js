let menu = document.querySelector("#menu");
let side = document.querySelector(".nav-side");
let fecharMenu = document.querySelector("#fecharMenu");

menu.addEventListener("click", abrirMenu);
fecharMenu.addEventListener("click", close);



function abrirMenu() {
    side.style.display = 'flex';
}

function close() {
    side.style.display = 'none';
}
