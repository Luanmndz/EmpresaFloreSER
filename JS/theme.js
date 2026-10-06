let btn = document.querySelector("#theme");
let tema = localStorage.getItem('theme');

if (tema === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
}

btn.addEventListener('click', () => {
    let temaAtual = document.documentElement.getAttribute('data-theme');
    let novoTema;

    if (temaAtual === 'dark') {
        novoTema = 'light';
    } else {
        novoTema = 'dark';
    }

    let alternarTema = () => {
        document.documentElement.setAttribute('data-theme', novoTema);
        localStorage.setItem('theme', novoTema);
    };

    if (document.startViewTransition) {
        document.startViewTransition(() => {
            alternarTema();
        });
    } else {
        alternarTema();
    }
});