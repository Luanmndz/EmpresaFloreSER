let btn = document.querySelectorAll('#theme');
let tema = localStorage.getItem('theme');

let img = document.querySelectorAll('.logo')

if (tema === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    img.src = 'imagens/LogoDark.png';
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    img.src = 'imagens/Logo.png';
}
btn.forEach((item) => {
item.addEventListener('click', () => {
    let temaAtual = document.documentElement.getAttribute('data-theme');
    let novoTema;

    if (temaAtual === 'dark') {
        novoTema = 'light';
        img.src = 'imagens/LogoDark.png';

    } else {
        novoTema = 'dark';
        img.src = 'imagens/Logo.png';
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
    })
});