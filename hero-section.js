// Hero Section Component - Noble Shield Security
(function() {
    'use strict';

    // Injetar CSS
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Barlow', sans-serif;
                overflow-x: hidden;
                background-color: black;
            }

            h1, h2, h3, h4, h5, h6 {
                font-family: 'Satoshi', sans-serif;
            }

            .header-section {
                position: relative;
                width: 100vw;
                height: 100vh;
                overflow: hidden;
            }

            .video-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
            }

            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(20, 20, 20, 0.55) 100%);
                z-index: 2;
            }

            .navbar {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                padding: 2rem 5%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                z-index: 1000;
            }

            .logo {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                position: relative;
                z-index: 1001;
            }

            .logo-image {
                height: 65px;
                width: auto;
            }

            .nav-menu {
                display: flex;
                gap: 3rem;
                list-style: none;
                position: relative;
                z-index: 1001;
            }

            .nav-menu li a {
                color: #F7F5FB;
                text-decoration: none;
                font-size: 1rem;
                font-weight: 600;
                letter-spacing: 0.5px;
                transition: all 0.3s ease;
                position: relative;
            }

            .nav-menu li a::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 0;
                height: 2px;
                background: #C4986A;
                transition: width 0.3s ease;
            }

            .nav-menu li a:hover {
                color: #C4986A;
            }

            .nav-menu li a:hover::after {
                width: 100%;
            }

            .hero-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                z-index: 3;
                width: 90%;
                max-width: 1200px;
            }

            .impact-phrase {
                color: #fff;
                font-size: clamp(2.5rem, 6vw, 5rem);
                font-weight: 800;
                line-height: 1.2;
                margin-bottom: 1.5rem;
                text-transform: uppercase;
                letter-spacing: 2px;
                text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
            }

            .impact-phrase .highlight {
                color: #C4986A;
                display: block;
            }

            .subheading {
                color: #F7F5FB;
                font-size: clamp(1.1rem, 2vw, 1.5rem);
                font-weight: 400;
                margin-bottom: 3rem;
                letter-spacing: 1px;
                opacity: 0.95;
            }

            .cta-button {
                display: inline-block;
                padding: 0.9rem 2.2rem;
                background: transparent;
                color: #fff;
                font-size: 0.95rem;
                font-weight: 600;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 1px;
                border: 2px solid #C4986A;
                border-radius: 4px;
                transition: all 0.3s ease;
            }

            .cta-button:hover {
                background: #C4986A;
                color: #000;
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(196, 152, 106, 0.4);
            }

            .menu-toggle {
                display: none;
                flex-direction: column;
                gap: 6px;
                cursor: pointer;
                padding: 10px;
                z-index: 1002;
                position: relative;
            }

            .menu-toggle span {
                width: 30px;
                height: 3px;
                background: #fff;
                border-radius: 3px;
                transition: all 0.3s ease;
            }

            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(8px, 8px);
            }

            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }

            .menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }

            .menu-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                z-index: 998;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .menu-overlay.active {
                display: block;
                opacity: 1;
            }

            @media (max-width: 968px) {
                .navbar {
                    padding: 1.5rem 5%;
                }

                .nav-menu {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    height: 100vh;
                    width: 80%;
                    max-width: 400px;
                    background: rgba(0, 0, 0, 0.98);
                    backdrop-filter: blur(10px);
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 3rem;
                    transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    padding: 2rem;
                    z-index: 999;
                }

                .nav-menu.active {
                    right: 0;
                }

                .nav-menu li {
                    opacity: 0;
                    transform: translateX(50px);
                    transition: all 0.3s ease;
                }

                .nav-menu.active li {
                    opacity: 1;
                    transform: translateX(0);
                }

                .nav-menu.active li:nth-child(1) { transition-delay: 0.1s; }
                .nav-menu.active li:nth-child(2) { transition-delay: 0.2s; }
                .nav-menu.active li:nth-child(3) { transition-delay: 0.3s; }
                .nav-menu.active li:nth-child(4) { transition-delay: 0.4s; }
                .nav-menu.active li:nth-child(5) { transition-delay: 0.5s; }

                .nav-menu li a {
                    font-size: 1.5rem;
                    padding: 1rem 0;
                }

                .menu-toggle {
                    display: flex;
                }

                .logo-image {
                    height: 50px;
                }

                .impact-phrase {
                    margin-bottom: 1rem;
                }

                .subheading {
                    margin-bottom: 2rem;
                    font-size: 1rem;
                }

                .cta-button {
                    padding: 0.8rem 1.8rem;
                    font-size: 0.9rem;
                }
            }

            @media (max-width: 480px) {
                .nav-menu {
                    width: 100%;
                }

                .logo-image {
                    height: 40px;
                }

                .impact-phrase {
                    font-size: 2rem;
                }

                .subheading {
                    font-size: 0.95rem;
                }
            }

            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    top: 52%;
                }
                to {
                    opacity: 1;
                    top: 50%;
                }
            }

            .hero-content {
                animation: fadeInUp 0.6s ease-out;
                animation-fill-mode: both;
            }

            html {
                scroll-behavior: smooth;
            }

            body.menu-open {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }

    // Criar estrutura HTML
    function createHeroSection() {
        const root = document.getElementById('root');
        
        const heroHTML = `
            <header class="header-section">
                <!-- Video Background -->
                <video class="video-background" autoplay muted loop playsinline>
                    <source src="security-video.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                </video>

                <!-- Overlay -->
                <div class="overlay"></div>

                <!-- Overlay do Menu Mobile -->
                <div class="menu-overlay" id="menuOverlay"></div>

                <!-- Navigation -->
                <nav class="navbar">
                    <div class="logo">
                        <img src="./logo.svg" alt="Noble Shield Security" class="logo-image">
                    </div>

                    <ul class="nav-menu" id="navMenu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#consultoria">Consultoria</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>

                    <div class="menu-toggle" id="menuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>

                <!-- Hero Content -->
                <div class="hero-content">
                    <h1 class="impact-phrase">
                        Protegendo o que
                        <span class="highlight">Realmente Importa</span>
                    </h1>
                    <p class="subheading">
                        Excelência em segurança, facilities e gestão operacional para o seu negócio
                    </p>
                    <a href="#contato" class="cta-button">Solicite uma Consultoria</a>
                </div>
            </header>
        `;

        root.innerHTML = heroHTML;
    }

    // Inicializar interações
    function initInteractions() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const body = document.body;

        function toggleMenu() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        }

        function closeMenu() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Toggle menu ao clicar no botão
        menuToggle.addEventListener('click', toggleMenu);

        // Fechar menu ao clicar no overlay
        menuOverlay.addEventListener('click', closeMenu);

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fechar menu ao pressionar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Prevenir scroll do vídeo em alguns navegadores
        const video = document.querySelector('.video-background');
        if (video) {
            video.addEventListener('loadedmetadata', function() {
                this.playbackRate = 1;
            });
        }
    }

    // Inicializar aplicação
    function init() {
        injectStyles();
        createHeroSection();
        initInteractions();
    }

    // Executar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();