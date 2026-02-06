// Noble Shield Security - Footer
(function() {
    'use strict';

    const styles = `
        /* ===== FOOTER ===== */
        .nss-footer {
            background: #000000;
            padding: 80px 6% 0;
            color: #ffffff;
        }

        .nss-footer-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Content Grid */
        .nss-footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            padding-bottom: 60px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Brand */
        .nss-footer-brand {
            max-width: 350px;
        }

        .nss-footer-logo {
            height: 60px;
            margin-bottom: 24px;
        }

        .nss-footer-description {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.7;
            margin-bottom: 24px;
        }

        /* Social Links */
        .nss-footer-social {
            display: flex;
            gap: 16px;
        }

        .nss-social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.05);
            color: #DB9D47;
            font-size: 20px;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .nss-social-link:hover {
            background: #DB9D47;
            color: #000000;
            transform: translateY(-3px);
        }

        /* Columns */
        .nss-footer-column-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 18px;
            font-weight: 700;
            color: #DB9D47;
            margin-bottom: 24px;
        }

        .nss-footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .nss-footer-links li {
            margin-bottom: 14px;
        }

        .nss-footer-links a {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .nss-footer-links a:hover {
            color: #DB9D47;
            transform: translateX(4px);
        }

        /* Contact */
        .nss-footer-contact p {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.8;
            margin-bottom: 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .nss-footer-contact i {
            color: #DB9D47;
            font-size: 18px;
            margin-top: 2px;
        }

        /* Bottom */
        .nss-footer-bottom {
            padding: 32px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nss-footer-copyright {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
        }

        .nss-footer-credits {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.5);
        }

        .nss-footer-credits a {
            color: #DB9D47;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .nss-footer-credits a:hover {
            color: #ffffff;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
            .nss-footer-content {
                grid-template-columns: repeat(2, 1fr);
                gap: 40px;
            }

            .nss-footer-brand {
                max-width: 100%;
            }
        }

        @media (max-width: 768px) {
            .nss-footer {
                padding: 60px 5% 0;
            }

            .nss-footer-content {
                grid-template-columns: 1fr;
                gap: 40px;
                padding-bottom: 40px;
            }

            .nss-footer-bottom {
                flex-direction: column;
                gap: 16px;
                text-align: center;
                padding: 24px 0;
            }

            .nss-footer-copyright,
            .nss-footer-credits {
                font-size: 13px;
            }
        }
    `;

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
    }

    function createFooter() {
        const footer = document.createElement('footer');
        footer.className = 'nss-footer';
        footer.id = 'contato';

        const container = document.createElement('div');
        container.className = 'nss-footer-container';

        container.innerHTML = `
            <div class="nss-footer-content">
                <div class="nss-footer-brand">
                    <img src="./logo.svg" alt="Noble Shield Security" class="nss-footer-logo">
                    <p class="nss-footer-description">
                        Excelência em segurança patrimonial, inteligência investigativa e gestão operacional. 
                        Protegendo o que realmente importa para você.
                    </p>
                    <div class="nss-footer-social">
                        <a href="https://www.instagram.com/nobleshieldsecurity/" target="_blank" class="nss-social-link">
                            <i class="ph ph-instagram-logo"></i>
                        </a>
                        <a href="https://wa.me/5511964448112" target="_blank" class="nss-social-link">
                            <i class="ph ph-whatsapp-logo"></i>
                        </a>
                        <a href="#" target="_blank" class="nss-social-link">
                            <i class="ph ph-linkedin-logo"></i>
                        </a>
                    </div>
                </div>

                <div class="nss-footer-column">
                    <h4 class="nss-footer-column-title">Navegação</h4>
                    <ul class="nss-footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div class="nss-footer-column">
                    <h4 class="nss-footer-column-title">Serviços</h4>
                    <ul class="nss-footer-links">
                        <li><a href="#servicos">Segurança Patrimonial</a></li>
                        <li><a href="#servicos">Segurança VIP</a></li>
                        <li><a href="#servicos">Monitoramento</a></li>
                        <li><a href="#servicos">Facilities</a></li>
                    </ul>
                </div>

                <div class="nss-footer-column nss-footer-contact">
                    <h4 class="nss-footer-column-title">Contato</h4>
                    <p>
                        <i class="ph ph-phone"></i>
                        (11) 96444-8112
                    </p>
                    <p>
                        <i class="ph ph-envelope"></i>
                        contato@nobleshield.com.br
                    </p>
                    <p>
                        <i class="ph ph-map-pin"></i>
                        São Paulo, SP
                    </p>
                </div>
            </div>

            <div class="nss-footer-bottom">
                <p class="nss-footer-copyright">
                    © ${new Date().getFullYear()} Noble Shield Security. Todos os direitos reservados.
                </p>
                <p class="nss-footer-credits">
                    Desenvolvido por <a href="https://www.instagram.com/criativasolucoesmkt/" target="_blank">Agência Criativa</a>
                </p>
            </div>
        `;

        footer.appendChild(container);
        return footer;
    }

    function init() {
        injectStyles();
        
        const root = document.getElementById('root');
        if (root) {
            const footer = createFooter();
            root.appendChild(footer);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
