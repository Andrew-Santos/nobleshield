// Services Section Component - Noble Shield Security
(function() {
    'use strict';

    // Injetar CSS da seção de serviços
    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .services-section {
                width: 100%;
                background-color: #fff;
                padding: 4rem 5%;
            }

            .services-container {
                max-width: 1100px;
                margin: 0 auto;
            }

            .services-header {
                margin-bottom: 3rem;
            }

            .services-subtitle {
                font-family: 'Barlow', sans-serif;
                font-size: 0.85rem;
                font-weight: 600;
                color: #C4986A;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 0.5rem;
            }

            .services-title {
                font-family: 'Satoshi', sans-serif;
                font-size: 2.2rem;
                font-weight: 700;
                color: #1a1a1a;
                margin-bottom: 0.8rem;
            }

            .services-description {
                font-family: 'Barlow', sans-serif;
                font-size: 1rem;
                color: #666;
                max-width: 650px;
                line-height: 1.6;
            }

            .services-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
                margin-top: 2.5rem;
            }

            .service-card {
                background: #fafafa;
                padding: 2rem 1.8rem;
                border: 1px solid #e8e8e8;
            }

            .service-icon-wrapper i {
                font-size: 2.2rem;
                color: #C4986A;
                display: block;
                margin-bottom: 1.2rem;
            }

            .service-card-title {
                font-family: 'Satoshi', sans-serif;
                font-size: 1.2rem;
                font-weight: 600;
                color: #1a1a1a;
                margin-bottom: 0.8rem;
            }

            .service-card-description {
                font-family: 'Barlow', sans-serif;
                font-size: 0.95rem;
                color: #666;
                line-height: 1.5;
                margin-bottom: 1rem;
            }

            .service-features-list {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .service-features-list li {
                font-family: 'Barlow', sans-serif;
                font-size: 0.9rem;
                color: #555;
                padding: 0.3rem 0;
                padding-left: 1.2rem;
                position: relative;
            }

            .service-features-list li::before {
                content: '•';
                position: absolute;
                left: 0;
                color: #C4986A;
                font-weight: bold;
            }

            @media (max-width: 968px) {
                .services-grid {
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1.5rem;
                }
            }

            @media (max-width: 640px) {
                .services-section {
                    padding: 3rem 5%;
                }

                .services-title {
                    font-size: 1.8rem;
                }

                .services-grid {
                    grid-template-columns: 1fr;
                }

                .service-card {
                    padding: 1.5rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Carregar Phosphor Icons
    function loadPhosphorIcons() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css';
        document.head.appendChild(link);
    }

    // Dados dos serviços
    const servicesData = [
        {
            icon: 'ph ph-door-open',
            title: 'Portaria',
            description: 'Controle de entradas e saídas com profissionalismo.',
            features: [
                'Presencial e remota',
                'Gestão de visitantes',
                'Relatórios'
            ]
        },
        {
            icon: 'ph ph-lock-key',
            title: 'Controle de Acesso',
            description: 'Monitoramento e segurança de pessoas e veículos.',
            features: [
                'Tecnologia integrada',
                'Controle eficaz',
                'Documentação completa'
            ]
        },
        {
            icon: 'ph ph-broom',
            title: 'Limpeza',
            description: 'Ambientes limpos e organizados.',
            features: [
                'Comercial e industrial',
                'Condomínios',
                'Equipes treinadas'
            ]
        },
        {
            icon: 'ph ph-wrench',
            title: 'Manutenção',
            description: 'Cuidados preventivos e corretivos.',
            features: [
                'Elétrica e hidráulica',
                'Estrutural',
                'Agilidade técnica'
            ]
        },
        {
            icon: 'ph ph-plant',
            title: 'Jardinagem',
            description: 'Cuidado com áreas verdes e externas.',
            features: [
                'Manutenção regular',
                'Paisagismo',
                'Valorização do espaço'
            ]
        },
        {
            icon: 'ph ph-users-three',
            title: 'Apoio Operacional',
            description: 'Serviços personalizados para sua rotina.',
            features: [
                'Recepcionistas',
                'Auxiliares diversos',
                'Padrão profissional'
            ]
        }
    ];

    // Criar estrutura HTML
    function createServicesSection() {
        const section = document.createElement('section');
        section.className = 'services-section';
        section.id = 'servicos';

        const container = document.createElement('div');
        container.className = 'services-container';

        // Header
        const header = document.createElement('div');
        header.className = 'services-header';
        header.innerHTML = `
            <p class="services-subtitle">Serviços</p>
            <h2 class="services-title">O que fazemos</h2>
            <p class="services-description">
                Soluções integradas para segurança patrimonial e gestão operacional.
            </p>
        `;

        // Grid de serviços
        const grid = document.createElement('div');
        grid.className = 'services-grid';

        servicesData.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';

            const featuresList = service.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');

            card.innerHTML = `
                <div class="service-icon-wrapper">
                    <i class="${service.icon}"></i>
                </div>
                <h3 class="service-card-title">${service.title}</h3>
                <p class="service-card-description">${service.description}</p>
                <ul class="service-features-list">
                    ${featuresList}
                </ul>
            `;

            grid.appendChild(card);
        });

        container.appendChild(header);
        container.appendChild(grid);
        section.appendChild(container);

        return section;
    }

    // Inicializar seção
    function init() {
        loadPhosphorIcons();
        injectStyles();
        
        const root = document.getElementById('root');
        const servicesSection = createServicesSection();
        root.appendChild(servicesSection);
    }

    // Executar quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();