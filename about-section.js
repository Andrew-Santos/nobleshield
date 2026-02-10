// Noble Shield Security - Sobre (Versão Otimizada Mobile)
(function() {
    'use strict';

    const styles = `
        .nss-about {
            background: #0A1E2E;
            padding: 100px 6%;
            position: relative;
            overflow: hidden;
        }

        .nss-about::before {
            content: '';
            position: absolute;
            top: 0;
            right: -200px;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(219, 157, 71, 0.08) 0%, transparent 70%);
            pointer-events: none;
        }

        .nss-about-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .nss-about-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 70px;
        }

        .nss-about-tag {
            font-family: 'Barlow', sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #DB9D47;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            margin-bottom: 16px;
            display: inline-block;
        }

        .nss-about-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 42px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 20px;
            line-height: 1.25;
            letter-spacing: -0.5px;
        }

        .nss-about-intro {
            font-family: 'Barlow', sans-serif;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.7;
        }

        .nss-about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
            margin-bottom: 70px;
        }

        .nss-content-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 40px 34px;
            border-left: 3px solid #DB9D47;
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
        }

        .nss-content-card:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(6px);
        }

        .nss-content-card h3 {
            font-family: 'Satoshi', sans-serif;
            font-size: 22px;
            font-weight: 700;
            color: #DB9D47;
            margin-bottom: 16px;
        }

        .nss-content-card p {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.7;
        }

        .nss-specialties {
            background: rgba(255, 255, 255, 0.03);
            padding: 50px 40px;
            border: 1px solid rgba(219, 157, 71, 0.2);
        }

        .nss-specialties-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 40px;
            text-align: center;
        }

        .nss-specialties-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
        }

        .nss-specialty-item {
            display: flex;
            gap: 20px;
            padding: 28px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nss-specialty-item:hover {
            background: rgba(219, 157, 71, 0.1);
            border-color: #DB9D47;
            transform: translateY(-3px);
        }

        .nss-specialty-icon {
            font-size: 36px;
            color: #DB9D47;
            flex-shrink: 0;
            transition: transform 0.4s ease;
        }

        .nss-specialty-item:hover .nss-specialty-icon {
            transform: scale(1.08) rotate(-5deg);
        }

        .nss-specialty-content h4 {
            font-family: 'Satoshi', sans-serif;
            font-size: 17px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 10px;
        }

        .nss-specialty-content p {
            font-family: 'Barlow', sans-serif;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
        }

        .nss-about-cta {
            margin-top: 70px;
            text-align: center;
            padding: 50px 34px;
            background: linear-gradient(135deg, rgba(219, 157, 71, 0.15) 0%, rgba(219, 157, 71, 0.05) 100%);
            border: 2px solid rgba(219, 157, 71, 0.3);
        }

        .nss-about-cta h3 {
            font-family: 'Satoshi', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 14px;
        }

        .nss-about-cta p {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 28px;
        }

        .nss-about-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 36px;
            background: #DB9D47;
            color: #0A1E2E;
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            transition: all 0.4s ease;
        }

        .nss-about-cta-button:hover {
            background: #C4986A;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(219, 157, 71, 0.4);
        }

        .nss-about-cta-icon {
            font-size: 18px;
            transition: transform 0.3s ease;
        }

        .nss-about-cta-button:hover .nss-about-cta-icon {
            transform: translateX(4px);
        }

        @media (max-width: 1024px) {
            .nss-about {
                padding: 80px 5%;
            }

            .nss-about-title {
                font-size: 36px;
            }

            .nss-about-content {
                gap: 28px;
            }

            .nss-specialties-grid {
                gap: 24px;
            }
        }

        @media (max-width: 768px) {
            .nss-about {
                padding: 60px 5%;
            }

            .nss-about-header {
                margin-bottom: 50px;
            }

            .nss-about-tag {
                font-size: 11px;
                letter-spacing: 2px;
                margin-bottom: 12px;
            }

            .nss-about-title {
                font-size: 28px;
                margin-bottom: 16px;
            }

            .nss-about-intro {
                font-size: 14px;
                line-height: 1.6;
            }

            .nss-about-content {
                grid-template-columns: 1fr;
                gap: 20px;
                margin-bottom: 50px;
            }

            .nss-content-card {
                padding: 28px 24px;
            }

            .nss-content-card h3 {
                font-size: 19px;
                margin-bottom: 12px;
            }

            .nss-content-card p {
                font-size: 13px;
            }

            .nss-specialties {
                padding: 36px 24px;
            }

            .nss-specialties-title {
                font-size: 24px;
                margin-bottom: 32px;
            }

            .nss-specialties-grid {
                grid-template-columns: 1fr;
                gap: 18px;
            }

            .nss-specialty-item {
                padding: 22px;
                gap: 16px;
            }

            .nss-specialty-icon {
                font-size: 30px;
            }

            .nss-specialty-content h4 {
                font-size: 16px;
                margin-bottom: 8px;
            }

            .nss-specialty-content p {
                font-size: 12px;
            }

            .nss-about-cta {
                padding: 36px 24px;
                margin-top: 50px;
            }

            .nss-about-cta h3 {
                font-size: 22px;
                margin-bottom: 12px;
            }

            .nss-about-cta p {
                font-size: 14px;
                margin-bottom: 24px;
            }

            .nss-about-cta-button {
                width: 100%;
                justify-content: center;
                padding: 14px 28px;
                font-size: 13px;
                letter-spacing: 1px;
            }

            .nss-about-cta-icon {
                font-size: 16px;
            }
        }

        @media (max-width: 480px) {
            .nss-about {
                padding: 50px 5%;
            }

            .nss-about-title {
                font-size: 24px;
            }

            .nss-content-card {
                padding: 24px 20px;
            }

            .nss-content-card h3 {
                font-size: 17px;
            }

            .nss-specialties {
                padding: 30px 20px;
            }

            .nss-specialties-title {
                font-size: 21px;
            }

            .nss-specialty-item {
                padding: 20px;
            }

            .nss-specialty-icon {
                font-size: 28px;
            }

            .nss-about-cta {
                padding: 30px 20px;
            }

            .nss-about-cta h3 {
                font-size: 20px;
            }
        }
    `;

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
    }

    const aboutData = {
        content: [
            {
                title: 'Segurança Inteligente',
                text: 'Mais do que proteger, investigamos, analisamos e antecipamos riscos. Combinamos tecnologia de ponta, inteligência investigativa e equipes altamente preparadas para garantir tranquilidade em todos os cenários possíveis.'
            },
            {
                title: 'Inteligência que Protege',
                text: 'Oferecemos investigação profissional, análise criteriosa de riscos e proteção estratégica. Com tecnologia avançada, profissionais treinados e métodos próprios desenvolvidos ao longo de anos de experiência.'
            }
        ],
        specialties: [
            {
                icon: 'ph-magnifying-glass',
                name: 'Checagem de Perfil',
                description: 'Análise completa de redes sociais, histórico jurídico e verificação minuciosa de antecedentes.'
            },
            {
                icon: 'ph-map-pin',
                name: 'Mapa de Risco',
                description: 'Análise geográfica detalhada e mapeamento estratégico de riscos para proteção efetiva.'
            },
            {
                icon: 'ph-shield-check',
                name: 'Segurança Patrimonial',
                description: 'Vigilância estratégica, análise profunda de riscos e equipes altamente treinadas.'
            },
            {
                icon: 'ph-detective',
                name: 'Inteligência Investigativa',
                description: 'Investigação profissional e monitoramento estratégico com metodologia proprietária.'
            }
        ]
    };

    function createAboutSection() {
        const section = document.createElement('section');
        section.className = 'nss-about';
        section.id = 'sobre';

        const container = document.createElement('div');
        container.className = 'nss-about-container';

        const header = document.createElement('div');
        header.className = 'nss-about-header';
        header.innerHTML = `
            <span class="nss-about-tag">Sobre Nós</span>
            <h2 class="nss-about-title">Especialistas em Segurança e Inteligência</h2>
            <p class="nss-about-intro">
                Soluções integradas em segurança patrimonial, inteligência investigativa e serviços 
                operacionais moldados para prevenir riscos e garantir total tranquilidade aos nossos clientes.
            </p>
        `;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'nss-about-content';

        aboutData.content.forEach(item => {
            const card = document.createElement('div');
            card.className = 'nss-content-card';
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            `;
            contentDiv.appendChild(card);
        });

        const specialtiesSection = document.createElement('div');
        specialtiesSection.className = 'nss-specialties';

        const specialtiesTitle = document.createElement('h3');
        specialtiesTitle.className = 'nss-specialties-title';
        specialtiesTitle.textContent = 'Nossas Especialidades';

        const specialtiesGrid = document.createElement('div');
        specialtiesGrid.className = 'nss-specialties-grid';

        aboutData.specialties.forEach(specialty => {
            const item = document.createElement('div');
            item.className = 'nss-specialty-item';
            item.innerHTML = `
                <i class="ph ${specialty.icon} nss-specialty-icon"></i>
                <div class="nss-specialty-content">
                    <h4>${specialty.name}</h4>
                    <p>${specialty.description}</p>
                </div>
            `;
            specialtiesGrid.appendChild(item);
        });

        specialtiesSection.appendChild(specialtiesTitle);
        specialtiesSection.appendChild(specialtiesGrid);

        const ctaSection = document.createElement('div');
        ctaSection.className = 'nss-about-cta';
        ctaSection.innerHTML = `
            <h3>Pronto para Tomar Decisões com Mais Segurança?</h3>
            <p>Conte com nossa inteligência investigativa e proteção profissional para seu negócio.</p>
            <a href="https://wa.me/5511964448112?text=Olá!%20Gostaria%20de%20conhecer%20as%20soluções%20de%20segurança%20da%20Noble%20Shield." class="nss-about-cta-button" target="_blank">
                Fale Conosco Agora
                <i class="ph ph-whatsapp-logo nss-about-cta-icon"></i>
            </a>
        `;

        container.appendChild(header);
        container.appendChild(contentDiv);
        container.appendChild(specialtiesSection);
        container.appendChild(ctaSection);
        section.appendChild(container);

        return section;
    }

    function init() {
        injectStyles();
        
        const root = document.getElementById('root');
        if (root) {
            const section = createAboutSection();
            root.appendChild(section);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();