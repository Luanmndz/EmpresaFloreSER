let btn = document.querySelectorAll('#theme');
let img = document.querySelectorAll('.logo');

function TrocarTemaEFoto(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('theme', tema);

    let caminhoLogo;
    if (tema === 'light') {
        caminhoLogo = 'imagens/LogoDark.png';
    } else {
        caminhoLogo = 'imagens/Logo.png';
    }

    img.forEach((logo) => {
        logo.src = caminhoLogo;
    });
}

let temaUsuario = localStorage.getItem('theme');

let temaAtual = temaUsuario;
if (!temaUsuario) {
    temaAtual = 'dark';
}

TrocarTemaEFoto(temaAtual);

function Temas() {
    let temaAtual = document.documentElement.getAttribute('data-theme');
    let novoTema;

    if (temaAtual === 'dark') {
        novoTema = 'light';
    } else {
        novoTema = 'dark';
    }

    if (document.startViewTransition) {
        document.startViewTransition(() => {
            TrocarTemaEFoto(novoTema);
        });
    } else {
        TrocarTemaEFoto(novoTema);
    }
}

btn.forEach((btns) => {
    btns.addEventListener('click', Temas);
});