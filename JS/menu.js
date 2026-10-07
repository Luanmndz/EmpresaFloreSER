let menu = document.querySelector("#menu");
let side = document.querySelector(".nav-side");
let fecharMenu = document.querySelector("#fecharMenu");
let navItem = document.querySelectorAll(".nav-item");

menu.addEventListener("click", abrirMenu);
fecharMenu.addEventListener("click", close);

function abrirMenu() {
    side.style.display = 'flex';
    menu.style.display = 'none'; 
}
function close() {
    side.style.display = 'none';
    menu.style.display = 'flex'; 
}

navItem.forEach((item) => {
    item.addEventListener("click", () =>{
        side.style.display = 'none';
    })
})

