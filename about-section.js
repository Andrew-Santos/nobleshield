// About Section Component - Noble Shield Security
(function() {
    'use strict';

    // Injetar CSS da seção sobre
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .about-section {
                width: 100%;
                background-color: #F7F5FB;
                padding: 4rem 5%;
            }

            .about-container {
                max-width: 1100px;
                margin: 0 auto;
            }

            .about-header {
                margin-bottom: 3rem;
            }

            .about-subtitle {
                font-family: 'Barlow', sans-serif;
                font-size: 0.85rem;
                font-weight: 600;
                color: #C4986A;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 0.5rem;
            }

            .about-title {
                font-family: 'Satoshi', sans-serif;
                font-size: 2.2rem;
                font-weight: 700;
                color: #1a1a1a;
                margin-bottom: 1rem;
            }

            .about-intro {
                font-family: 'Barlow', sans-serif;
                font-size: 1rem;
                color: #666;
                line-height: 1.6;
                max-width: 700px;
            }

            .about-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2.5rem;
                margin: 3rem 0;
            }

            .content-block {
                background: #fff;
                padding: 2rem;
                border-left: 3px solid #C4986A;
            }

            .content-block h3 {
                font-family: 'Satoshi', sans-serif;
                font-size: 1.3rem;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 0.8rem;
            }

            .content-block p {
                font-family: 'Barlow', sans-serif;
                font-size: 0.95rem;
                color: #555;
                line-height: 1.6;
            }

            .specialties-section {
                margin-top: 3rem;
                background: #fff;
                padding: 2.5rem;
            }

            .specialties-title {
                font-family: 'Satoshi', sans-serif;
                font-size: 1.5rem;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 2rem;
            }

            .specialties-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1.5rem;
            }

            .specialty-item {
                display: flex;
                gap: 1rem;
                padding: 1.2rem;
                background: #fafafa;
                border: 1px solid #e8e8e8;
            }

            .specialty-icon {
                font-size: 1.8rem;
                color: #C4986A;
                flex-shrink: 0;
            }

            .specialty-content h4 {
                font-family: 'Satoshi', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 0.3rem;
            }

            .specialty-content p {
                font-family: 'Barlow', sans-serif;
                font-size: 0.9rem;
                color: #666;
                line-height: 1.4;
            }

            .cta-section {
                margin-top: 3rem;
                text-align: center;
                padding: 2.5rem 2rem;
                background: #1a1a1a;
            }

            .cta-section h3 {
                font-family: 'Satoshi', sans-serif;
                font-size: 1.6rem;
                font-weight: 600;
                color: #fff;
                margin-bottom: 0.8rem;
            }

            .cta-section p {
                font-family: 'Barlow', sans-serif;
                font-size: 0.95rem;
                color: #ccc;
                margin-bottom: 1.5rem;
            }

            .cta-button {
                display: inline-block;
                padding: 0.8rem 1.8rem;
                background: #C4986A;
                color: #000;
                font-family: 'Barlow', sans-serif;
                font-size: 0.9rem;
                font-weight: 600;
                text-decoration: none;
                text-transform: uppercase;
            }

            .cta-button:hover {
                background: #a67c52;
            }

            @media (max-width: 768px) {
                .about-section {
                    padding: 3rem 5%;
                }

                .about-title {
                    font-size: 1.8rem;
                }

                .about-content {
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                }

                .specialties-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Dados da seção
    const aboutData = {
        content: [
            {
                title: 'Segurança Inteligente',
                text: 'Mais do que proteger, investigamos, analisamos e antecipamos riscos. Combinamos tecnologia, inteligência investigativa e equipes preparadas para garantir tranquilidade em todos os cenários.'
            },
            {
                title: 'Inteligência que Protege',
                text: 'Oferecemos investigação, análise de risco e proteção estratégica. Tecnologia de ponta, profissionais treinados e métodos próprios para garantir sua tranquilidade.'
            }
        ],
        specialties: [
            {
                icon: 'ph ph-magnifying-glass',
                name: 'Checagem de Perfil',
                description: 'Análise de redes sociais, histórico jurídico e verificação de antecedentes.'
            },
            {
                icon: 'ph ph-map-pin',
                name: 'Mapa de Risco',
                description: 'Análise geográfica e mapeamento de riscos para proteção estratégica.'
            },
            {
                icon: 'ph ph-shield-check',
                name: 'Segurança Patrimonial',
                description: 'Vigilância estratégica, análise de risco e equipes treinadas.'
            },
            {
                icon: 'ph ph-detective',
                name: 'Inteligência Investigativa',
                description: 'Investigação profissional e monitoramento estratégico.'
            }
        ]
    };

    // Criar estrutura HTML
    function createAboutSection() {
        const section = document.createElement('section');
        section.className = 'about-section';
        section.id = 'sobre';

        const container = document.createElement('div');
        container.className = 'about-container';

        // Header
        const header = document.createElement('div');
        header.className = 'about-header';
        header.innerHTML = `
            <p class="about-subtitle">Sobre Nós</p>
            <h2 class="about-title">Especialistas em Segurança e Inteligência</h2>
            <p class="about-intro">
                Soluções integradas em segurança patrimonial, inteligência investigativa e serviços operacionais 
                moldados para prevenir riscos e garantir tranquilidade.
            </p>
        `;

        // Content blocks
        const contentDiv = document.createElement('div');
        contentDiv.className = 'about-content';

        aboutData.content.forEach(item => {
            const block = document.createElement('div');
            block.className = 'content-block';
            block.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            `;
            contentDiv.appendChild(block);
        });

        // Specialties
        const specialtiesSection = document.createElement('div');
        specialtiesSection.className = 'specialties-section';

        const specialtiesTitle = document.createElement('h3');
        specialtiesTitle.className = 'specialties-title';
        specialtiesTitle.textContent = 'Nossas Especialidades';

        const specialtiesGrid = document.createElement('div');
        specialtiesGrid.className = 'specialties-grid';

        aboutData.specialties.forEach(specialty => {
            const item = document.createElement('div');
            item.className = 'specialty-item';
            item.innerHTML = `
                <i class="${specialty.icon} specialty-icon"></i>
                <div class="specialty-content">
                    <h4>${specialty.name}</h4>
                    <p>${specialty.description}</p>
                </div>
            `;
            specialtiesGrid.appendChild(item);
        });

        specialtiesSection.appendChild(specialtiesTitle);
        specialtiesSection.appendChild(specialtiesGrid);

        // CTA
        const ctaSection = document.createElement('div');
        ctaSection.className = 'cta-section';
        ctaSection.innerHTML = `
            <h3>Pronto para tomar decisões com mais segurança?</h3>
            <p>Conte com nossa inteligência investigativa e proteção profissional.</p>
            <a href="#contato" class="cta-button">Fale Conosco</a>
        `;

        // Montar
        container.appendChild(header);
        container.appendChild(contentDiv);
        container.appendChild(specialtiesSection);
        container.appendChild(ctaSection);
        section.appendChild(container);

        return section;
    }

    // Inicializar seção
    function init() {
        injectStyles();
        
        const root = document.getElementById('root');
        const aboutSection = createAboutSection();
        root.appendChild(aboutSection);
    }

    // Executar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();