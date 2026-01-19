if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});

/* Procura a versão mais recente e atualiza os links com classe .js-download-link */
async function updateDownloadLinks() {
    const owner = "matheusmg20";
    const repo = "querylake_releases";
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Falha ao buscar versão no GitHub');
        
        const data = await response.json();
        
        const asset = data.assets.find(a => a.name.endsWith('.exe'));
        
        if (asset) {
            const downloadUrl = asset.browser_download_url;
            const downloadButtons = document.querySelectorAll('.js-download-link');
            
            downloadButtons.forEach(btn => {
                btn.href = downloadUrl;
            });
            
            console.log(`QueryLake: Links atualizados para a versão ${data.tag_name}`);
        }
    } catch (error) {
        console.error("Erro ao buscar release dinâmica:", error);
    }
}

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    document.body.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", () => {
    reveal();
    updateDownloadLinks();
});