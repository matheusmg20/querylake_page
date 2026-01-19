document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu');
    const sidebar = document.querySelector('.sidebar');
    
    // Criar overlay se não existir
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
    }

    function toggleMenu() {
        const isOpen = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Bloqueia o scroll do corpo quando aberto
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // Eventos
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    overlay.addEventListener('click', toggleMenu);

    // Fecha ao clicar nos links
    const navLinks = document.querySelectorAll('.nav-group a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
});