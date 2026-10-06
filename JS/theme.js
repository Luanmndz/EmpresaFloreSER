let btn = document.querySelector("#theme");
let tema = localStorage.getItem('theme');

if (tema === 'light'){
    document.documentElement.setAttribute('data-theme', 'light')
}
else{
    document.documentElement.setAttribute('data-theme', 'dark')
}

btn.addEventListener('click', () => {
    let temaAtual = document.documentElement.getAttribute('data-theme');

    if (temaAtual === 'dark'){
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
})

