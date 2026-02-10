// Noble Shield Security - Footer (Versão Otimizada Mobile)
(function() {
    'use strict';

    const styles = `
        .nss-footer {
            background: #000000;
            padding: 70px 6% 0;
            color: #ffffff;
        }

        .nss-footer-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .nss-footer-content {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 50px;
            padding-bottom: 50px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nss-footer-brand {
            max-width: 350px;
        }

        .nss-footer-logo {
            height: 50px;
            margin-bottom: 20px;
        }

        .nss-footer-description {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.65;
            margin-bottom: 20px;
        }

        .nss-footer-social {
            display: flex;
            gap: 14px;
        }

        .nss-social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            background: rgba(255, 255, 255, 0.05);
            color: #DB9D47;
            font-size: 18px;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .nss-social-link:hover {
            background: #DB9D47;
            color: #000000;
            transform: translateY(-3px);
        }

        .nss-footer-column h4 {
            font-family: 'Satoshi', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #DB9D47;
            margin-bottom: 20px;
        }

        .nss-footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .nss-footer-links li {
            margin-bottom: 12px;
        }

        .nss-footer-links a {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block;
        }

        .nss-footer-links a:hover {
            color: #DB9D47;
            transform: translateX(4px);
        }

        .nss-footer-contact p {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.7;
            margin-bottom: 10px;
            display: flex;
            align-items: flex-start;
            gap: 8px;
        }

        .nss-footer-contact i {
            color: #DB9D47;
            font-size: 16px;
            margin-top: 2px;
        }

        .nss-footer-bottom {
            padding: 28px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nss-footer-copyright {
            font-family: 'Barlow', sans-serif;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.5);
        }

        .nss-footer-credits {
            font-family: 'Barlow', sans-serif;
            font-size: 13px;
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

        @media (max-width: 1024px) {
            .nss-footer-content {
                grid-template-columns: repeat(2, 1fr);
                gap: 36px;
            }

            .nss-footer-brand {
                max-width: 100%;
            }
        }

        @media (max-width: 768px) {
            .nss-footer {
                padding: 50px 5% 0;
            }

            .nss-footer-content {
                grid-template-columns: 1fr;
                gap: 32px;
                padding-bottom: 36px;
            }

            .nss-footer-logo {
                height: 44px;
                margin-bottom: 16px;
            }

            .nss-footer-description {
                font-size: 13px;
                margin-bottom: 16px;
            }

            .nss-footer-social {
                gap: 12px;
            }

            .nss-social-link {
                width: 36px;
                height: 36px;
                font-size: 16px;
            }

            .nss-footer-column h4 {
                font-size: 15px;
                margin-bottom: 16px;
            }

            .nss-footer-links li {
                margin-bottom: 10px;
            }

            .nss-footer-links a {
                font-size: 13px;
            }

            .nss-footer-contact p {
                font-size: 13px;
                margin-bottom: 8px;
            }

            .nss-footer-contact i {
                font-size: 15px;
            }

            .nss-footer-bottom {
                flex-direction: column;
                gap: 14px;
                text-align: center;
                padding: 22px 0;
            }

            .nss-footer-copyright,
            .nss-footer-credits {
                font-size: 12px;
            }
        }

        @media (max-width: 480px) {
            .nss-footer {
                padding: 40px 5% 0;
            }

            .nss-footer-content {
                gap: 28px;
            }

            .nss-footer-logo {
                height: 40px;
            }

            .nss-footer-column h4 {
                font-size: 14px;
            }

            .nss-footer-copyright,
            .nss-footer-credits {
                font-size: 11px;
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
                    <h4>Navegação</h4>
                    <ul class="nss-footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div class="nss-footer-column">
                    <h4>Serviços</h4>
                    <ul class="nss-footer-links">
                        <li><a href="#servicos">Segurança Patrimonial</a></li>
                        <li><a href="#servicos">Segurança VIP</a></li>
                        <li><a href="#servicos">Monitoramento</a></li>
                        <li><a href="#servicos">Facilities</a></li>
                    </ul>
                </div>

                <div class="nss-footer-column nss-footer-contact">
                    <h4>Contato</h4>
                    <p>
                        <i class="ph ph-phone"></i>
                        (11) 96444-8112
                    </p>
                    <p>
                        <i class="ph ph-envelope"></i>
                        contato@nobleshieldsecurity.com
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