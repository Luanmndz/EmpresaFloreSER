// Pega o valor do datapop do html
let botoes = document.querySelectorAll("[data-popup]");

let popCard = document.getElementById("popup-card");
let popTitle = document.getElementById("popup-title");
let popText = document.getElementById("popup-text");
let btnFechar = document.getElementById("btn-fechar");

// Objeto para botar os textos dinamicamente nos popup
let TextoPopUp = {
    missao: {
        titulo: "Nossa missão",
        texto: "A missão da FloreSer é atuar de forma estratégica nos bastidores do ecossistema digital, transformando ideias, conceitos e necessidades de negócios em sites altamente funcionais, modernos e personalizados. Atendemos com a mesma dedicação desde pequenos empreendedores até grandes empresas, desenvolvendo soluções à medida que impulsionam a sua presença online. Nosso compromisso é otimizar o tempo dos nossos clientes, simplificar processos técnicos complexos e valorizar cada etapa do projeto, garantindo entregas pontuais, transparentes e alinhadas aos mais altos padrões de qualidade do mercado."
    },
    visao: {
        titulo: "Nossa visão",
        texto: "Trabalhamos diariamente com o objetivo consolidado de tornar a FloreSer uma referência nacional no desenvolvimento web e na terceirização estratégica de sistemas e sites para empresas de todos os portes. Queremos ser reconhecidos não apenas pela entrega técnica, mas pelo impacto transformador das nossas soluções, crescendo com base contínua em inovação, criatividade e excelência. Almejamos construir uma trajetória sólida e respeitada no mercado de tecnologia, onde cada projeto entregue sirva como exemplo de eficiência, usabilidade e sofisticação digital."
    },
    valores: {
        titulo: "Nossos valores",
        texto: "Guiamos todas as nossas decisões profissionais por pilares inegociáveis: honestidade, qualidade técnica e comprometimento absoluto com os objetivos do cliente. Acreditamos que conexões duradouras são construídas com base na transparência total, comunicação clara e responsabilidade ética em cada linha de código escrita. Buscamos constantemente superar as expectativas, entregando resultados de alta performance dos quais tanto a nossa equipa quanto os nossos parceiros e clientes possam se orgulhar genuinamente."
    },
    servicos: {
        titulo: "Nossos serviços",
        texto: "Oferecemos uma esteira completa de soluções digitais ponta a ponta para transformar ideias em plataformas web robustas e funcionais. Nosso trabalho abrange desde a fase inicial de planejamento estratégico, arquitetura de informação e criação de layouts modernos (UI/UX Design), até ao desenvolvimento técnico avançado de Front-end e Back-end. Priorizamos a criação de aplicações responsivas, ágeis, otimizadas para motores de busca (SEO) e extremamente seguras, garantindo que o seu público final tenha a melhor experiência de navegação possível."
    }
}
// Percorre os botoes e aciona na onde foi clicado
botoes.forEach(botao => {
    botao.addEventListener("click", (clique) => {
        let nome = clique.currentTarget.dataset.popup;

        let conteudo = TextoPopUp[nome];

        if (conteudo) {
            popTitle.textContent = conteudo.titulo;
            popText.textContent = conteudo.texto;

            popCard.classList.add('ativo');
        }
    });
});
// Se clicar no botao de sair remove a class do css (ativo)
if (btnFechar) {
    btnFechar.addEventListener("click", () => {
        popCard.classList.remove('ativo')
    });
}
// se clicar no ambiente atras remove tambem :)
if (popCard) {
    popCard.addEventListener("click", (i) => {
        if (i.target === popCard) {
            popCard.classList.remove('ativo');
        }

    });
}