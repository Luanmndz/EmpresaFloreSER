let menu = document.querySelector("#menu");
let side = document.querySelector(".nav-side");
let fecharMenu = document.querySelector("#fecharMenu");
let navItem = document.querySelectorAll(".nav-item");


menu.addEventListener("click", (e) => {
    e.stopPropagation(); 
    side.style.display = 'flex';
    menu.style.display = 'none'; 
});


fecharMenu.addEventListener("click", () => {
    side.style.display = 'none';
    menu.style.display = 'flex'; 
});


navItem.forEach((item) => {
    item.addEventListener("click", () => {
        side.style.display = 'none';
        menu.style.display = 'flex'; 
    });
});


document.addEventListener("click", (c) => {
    
    if (side.style.display === 'none') return;

    if (!side.contains(c.target) && !menu.contains(c.target)) {
        side.style.display = 'none';
        menu.style.display = 'flex';
    }
});