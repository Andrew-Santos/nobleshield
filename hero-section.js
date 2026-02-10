// Noble Shield Security - Hero Section (Versão Otimizada Mobile)
(function() {
    'use strict';

    const styles = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Barlow', sans-serif;
            overflow-x: hidden;
        }

        html {
            scroll-behavior: smooth;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Satoshi', sans-serif;
        }

        .nss-hero {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            background: #000000;
        }

        .nss-hero-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translate(-50%, -50%);
            object-fit: cover;
            z-index: 1;
        }

        .nss-hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(10, 30, 46, 0.6) 100%);
            z-index: 2;
        }

        .nss-navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 24px 6%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            background: transparent;
            transition: all 0.4s ease;
        }

        .nss-navbar.scrolled {
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            padding: 18px 6%;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .nss-logo {
            display: flex;
            align-items: center;
            position: relative;
            z-index: 1002;
        }

        .nss-logo-img {
            height: 60px;
            width: auto;
            transition: all 0.3s ease;
        }

        .nss-navbar.scrolled .nss-logo-img {
            height: 50px;
        }

        .nss-nav-menu {
            display: flex;
            gap: 40px;
            list-style: none;
            align-items: center;
        }

        .nss-nav-menu li a {
            color: #ffffff;
            text-decoration: none;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            position: relative;
            padding: 8px 0;
        }

        .nss-nav-menu li a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #DB9D47;
            transition: width 0.3s ease;
        }

        .nss-nav-menu li a:hover {
            color: #DB9D47;
        }

        .nss-nav-menu li a:hover::after {
            width: 100%;
        }

        .nss-hero-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            z-index: 3;
            width: 90%;
            max-width: 1200px;
        }

        .nss-hero-title {
            color: #ffffff;
            font-size: clamp(2rem, 5vw, 4.5rem);
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.5);
            animation: heroFadeIn 1s ease-out 0.3s backwards;
        }

        .nss-hero-highlight {
            color: #DB9D47;
            display: block;
            margin-top: 8px;
        }

        .nss-hero-subtitle {
            color: rgba(255, 255, 255, 0.95);
            font-size: clamp(0.95rem, 1.8vw, 1.3rem);
            font-weight: 400;
            margin-bottom: 36px;
            letter-spacing: 0.3px;
            line-height: 1.6;
            animation: heroFadeIn 1s ease-out 0.6s backwards;
        }

        .nss-hero-cta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 36px;
            background: transparent;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            border: 2px solid #DB9D47;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            animation: heroFadeIn 1s ease-out 0.9s backwards;
        }

        .nss-hero-cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: #DB9D47;
            transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
        }

        .nss-hero-cta:hover::before {
            left: 0;
        }

        .nss-hero-cta:hover {
            color: #0A1E2E;
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(219, 157, 71, 0.4);
        }

        .nss-hero-cta i {
            font-size: 18px;
            transition: transform 0.3s ease;
        }

        .nss-hero-cta:hover i {
            transform: translateX(4px);
        }

        .nss-menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 8px;
            z-index: 1002;
            background: transparent;
            border: none;
        }

        .nss-menu-toggle span {
            width: 26px;
            height: 2.5px;
            background: #ffffff;
            border-radius: 3px;
            transition: all 0.3s ease;
        }

        .nss-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }

        .nss-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nss-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        .nss-menu-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 998;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .nss-menu-overlay.active {
            display: block;
            opacity: 1;
        }

        body.menu-open {
            overflow: hidden;
        }

        @keyframes heroFadeIn {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 968px) {
            .nss-navbar {
                padding: 20px 5%;
            }

            .nss-navbar.scrolled {
                padding: 14px 5%;
            }

            .nss-logo-img {
                height: 48px;
            }

            .nss-navbar.scrolled .nss-logo-img {
                height: 44px;
            }

            .nss-nav-menu {
                position: fixed;
                top: 0;
                right: -100%;
                height: 100vh;
                width: 80%;
                max-width: 360px;
                background: rgba(0, 0, 0, 0.98);
                backdrop-filter: blur(20px);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 32px;
                transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                padding: 32px;
                z-index: 999;
                box-shadow: -5px 0 30px rgba(0, 0, 0, 0.5);
            }

            .nss-nav-menu.active {
                right: 0;
            }

            .nss-nav-menu li {
                opacity: 0;
                transform: translateX(50px);
                transition: all 0.4s ease;
            }

            .nss-nav-menu.active li {
                opacity: 1;
                transform: translateX(0);
            }

            .nss-nav-menu.active li:nth-child(1) { transition-delay: 0.1s; }
            .nss-nav-menu.active li:nth-child(2) { transition-delay: 0.15s; }
            .nss-nav-menu.active li:nth-child(3) { transition-delay: 0.2s; }
            .nss-nav-menu.active li:nth-child(4) { transition-delay: 0.25s; }

            .nss-nav-menu li a {
                font-size: 18px;
                padding: 10px 0;
            }

            .nss-menu-toggle {
                display: flex;
            }

            .nss-hero-title {
                margin-bottom: 16px;
                letter-spacing: 1px;
            }

            .nss-hero-subtitle {
                margin-bottom: 28px;
            }

            .nss-hero-cta {
                padding: 14px 28px;
                font-size: 13px;
                letter-spacing: 1px;
            }
        }

        @media (max-width: 480px) {
            .nss-nav-menu {
                width: 100%;
            }

            .nss-logo-img {
                height: 42px;
            }

            .nss-navbar.scrolled .nss-logo-img {
                height: 38px;
            }

            .nss-hero-title {
                font-size: 1.75rem;
                letter-spacing: 0.5px;
            }

            .nss-hero-subtitle {
                font-size: 0.9rem;
            }

            .nss-hero-cta {
                width: 88%;
                justify-content: center;
                padding: 13px 24px;
            }

            .nss-nav-menu li a {
                font-size: 16px;
            }
        }
    `;

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
    }

    function createHeroSection() {
        const root = document.getElementById('root');
        
        const heroHTML = `
            <section class="nss-hero" id="home">
                <!-- Video Background -->
                <video class="nss-hero-video" autoplay muted loop playsinline>
                    <source src="security-video.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                </video>

                <!-- Overlay -->
                <div class="nss-hero-overlay"></div>

                <!-- Overlay do Menu Mobile -->
                <div class="nss-menu-overlay" id="menuOverlay"></div>

                <!-- Navigation -->
                <nav class="nss-navbar" id="navbar">
                    <div class="nss-logo">
                        <img src="./logo.svg" alt="Noble Shield Security" class="nss-logo-img">
                    </div>

                    <ul class="nss-nav-menu" id="navMenu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>

                    <button class="nss-menu-toggle" id="menuToggle" aria-label="Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>

                <!-- Hero Content -->
                <div class="nss-hero-content">
                    <h1 class="nss-hero-title">
                        Protegendo o que
                        <span class="nss-hero-highlight">Realmente Importa</span>
                    </h1>
                    <p class="nss-hero-subtitle">
                        Excelência em segurança, facilities e gestão operacional para o seu negócio
                    </p>
                    <a href="https://wa.me/5511964448112?text=Olá!%20Gostaria%20de%20saber%20como%20a%20Noble%20Shield%20Security%20pode%20ajudar%20com%20minha%20necessidade%20em%20segurança%20e%20facilities.%20Poderiam%20me%20orientar,%20por%20favor?" 
                       class="nss-hero-cta" 
                       target="_blank">
                        Solicite uma Consultoria
                        <i class="ph ph-arrow-right"></i>
                    </a>
                </div>
            </section>
        `;

        root.innerHTML = heroHTML;
    }

    function initInteractions() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const navbar = document.getElementById('navbar');
        const body = document.body;

        // Toggle Menu
        function toggleMenu() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        }

        // Close Menu
        function closeMenu() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
        }

        // Menu Toggle Click
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMenu);
        }

        // Menu Overlay Click
        if (menuOverlay) {
            menuOverlay.addEventListener('click', closeMenu);
        }

        // Nav Links Click
        const navLinks = document.querySelectorAll('.nss-nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                closeMenu();
            });
        });

        // ESC Key Close Menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Navbar Scroll Effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScroll = currentScroll;
        });

        // Video Autoplay Fix
        const video = document.querySelector('.nss-hero-video');
        if (video) {
            video.addEventListener('loadedmetadata', function() {
                this.playbackRate = 1;
            });

            // Force play on user interaction
            document.addEventListener('click', () => {
                if (video.paused) {
                    video.play().catch(err => console.log('Video autoplay prevented'));
                }
            }, { once: true });
        }
    }

    function init() {
        injectStyles();
        createHeroSection();
        
        // Wait for DOM to be fully ready
        setTimeout(() => {
            initInteractions();
        }, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
