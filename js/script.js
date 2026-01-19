// Impede a restauração automática do scroll do navegador
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

// Força o topo ao carregar e ao atualizar (F5)
window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10); // Pequeno atraso para garantir a execução após o render
});

// Efeito Parallax no fundo
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    document.body.style.backgroundPosition = `${x}px ${y}px`;
});

// Função Reveal para animações
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);