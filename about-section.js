// Noble Shield Security - Sobre
(function() {
    'use strict';

    const styles = `
        /* ===== ABOUT SECTION ===== */
        .nss-about {
            background: #0A1E2E;
            padding: 120px 6%;
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

        /* Header */
        .nss-about-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 80px;
        }

        .nss-about-tag {
            font-family: 'Barlow', sans-serif;
            font-size: 13px;
            font-weight: 700;
            color: #DB9D47;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            display: inline-block;
        }

        .nss-about-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 48px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 24px;
            line-height: 1.2;
            letter-spacing: -1px;
        }

        .nss-about-intro {
            font-family: 'Barlow', sans-serif;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.8;
        }

        /* Content Cards */
        .nss-about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 80px;
        }

        .nss-content-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 48px 40px;
            border-left: 4px solid #DB9D47;
            backdrop-filter: blur(10px);
            transition: all 0.4s ease;
        }

        .nss-content-card:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: translateX(8px);
        }

        .nss-content-card-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 26px;
            font-weight: 700;
            color: #DB9D47;
            margin-bottom: 20px;
        }

        .nss-content-card-text {
            font-family: 'Barlow', sans-serif;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.8;
        }

        /* Specialties */
        .nss-specialties {
            background: rgba(255, 255, 255, 0.03);
            padding: 60px 50px;
            border: 1px solid rgba(219, 157, 71, 0.2);
        }

        .nss-specialties-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 50px;
            text-align: center;
        }

        .nss-specialties-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
        }

        .nss-specialty-item {
            display: flex;
            gap: 24px;
            padding: 32px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nss-specialty-item:hover {
            background: rgba(219, 157, 71, 0.1);
            border-color: #DB9D47;
            transform: translateY(-4px);
        }

        .nss-specialty-icon {
            font-size: 42px;
            color: #DB9D47;
            flex-shrink: 0;
            transition: transform 0.4s ease;
        }

        .nss-specialty-item:hover .nss-specialty-icon {
            transform: scale(1.1) rotate(-5deg);
        }

        .nss-specialty-content-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 12px;
        }

        .nss-specialty-content-text {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
        }

        /* CTA */
        .nss-about-cta {
            margin-top: 80px;
            text-align: center;
            padding: 60px 40px;
            background: linear-gradient(135deg, rgba(219, 157, 71, 0.15) 0%, rgba(219, 157, 71, 0.05) 100%);
            border: 2px solid rgba(219, 157, 71, 0.3);
        }

        .nss-about-cta-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 16px;
        }

        .nss-about-cta-text {
            font-family: 'Barlow', sans-serif;
            font-size: 17px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 32px;
        }

        .nss-about-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 40px;
            background: #DB9D47;
            color: #0A1E2E;
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            transition: all 0.4s ease;
        }

        .nss-about-cta-button:hover {
            background: #C4986A;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(219, 157, 71, 0.4);
        }

        .nss-about-cta-icon {
            font-size: 20px;
            transition: transform 0.3s ease;
        }

        .nss-about-cta-button:hover .nss-about-cta-icon {
            transform: translateX(4px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
            .nss-about {
                padding: 100px 5%;
            }

            .nss-about-title {
                font-size: 40px;
            }

            .nss-about-content {
                gap: 32px;
            }

            .nss-specialties-grid {
                gap: 24px;
            }
        }

        @media (max-width: 768px) {
            .nss-about {
                padding: 80px 5%;
            }

            .nss-about-title {
                font-size: 34px;
            }

            .nss-about-content {
                grid-template-columns: 1fr;
                gap: 24px;
                margin-bottom: 60px;
            }

            .nss-content-card {
                padding: 36px 28px;
            }

            .nss-specialties {
                padding: 40px 28px;
            }

            .nss-specialties-title {
                font-size: 28px;
                margin-bottom: 40px;
            }

            .nss-specialties-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .nss-specialty-item {
                padding: 24px;
            }

            .nss-about-cta {
                padding: 40px 28px;
                margin-top: 60px;
            }

            .nss-about-cta-title {
                font-size: 26px;
            }

            .nss-about-cta-button {
                width: 100%;
                justify-content: center;
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
                <h3 class="nss-content-card-title">${item.title}</h3>
                <p class="nss-content-card-text">${item.text}</p>
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
                    <h4 class="nss-specialty-content-title">${specialty.name}</h4>
                    <p class="nss-specialty-content-text">${specialty.description}</p>
                </div>
            `;
            specialtiesGrid.appendChild(item);
        });

        specialtiesSection.appendChild(specialtiesTitle);
        specialtiesSection.appendChild(specialtiesGrid);

        const ctaSection = document.createElement('div');
        ctaSection.className = 'nss-about-cta';
        ctaSection.innerHTML = `
            <h3 class="nss-about-cta-title">Pronto para Tomar Decisões com Mais Segurança?</h3>
            <p class="nss-about-cta-text">Conte com nossa inteligência investigativa e proteção profissional para seu negócio.</p>
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
