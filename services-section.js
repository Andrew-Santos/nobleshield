// Noble Shield Security - Serviços
(function() {
    'use strict';

    const styles = `
        /* ===== SERVICES SECTION ===== */
        .nss-services {
            background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
            padding: 120px 6%;
            position: relative;
        }

        .nss-services-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Header */
        .nss-services-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 80px;
        }

        .nss-services-tag {
            font-family: 'Barlow', sans-serif;
            font-size: 13px;
            font-weight: 700;
            color: #DB9D47;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            display: inline-block;
            position: relative;
            padding: 0 30px;
        }

        .nss-services-tag::before,
        .nss-services-tag::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 20px;
            height: 1px;
            background: #DB9D47;
        }

        .nss-services-tag::before { left: 0; }
        .nss-services-tag::after { right: 0; }

        .nss-services-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 48px;
            font-weight: 700;
            color: #0A1E2E;
            margin-bottom: 24px;
            line-height: 1.2;
            letter-spacing: -1px;
        }

        .nss-services-description {
            font-family: 'Barlow', sans-serif;
            font-size: 18px;
            color: #666666;
            line-height: 1.8;
            max-width: 680px;
            margin: 0 auto;
        }

        /* Grid */
        .nss-services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        /* Cards */
        .nss-service-card {
            background: #ffffff;
            padding: 42px 36px;
            border: 1px solid #ebebeb;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
        }

        .nss-service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(219, 157, 71, 0.03) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .nss-service-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #DB9D47 0%, #C4986A 100%);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nss-service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(10, 30, 46, 0.12);
            border-color: #DB9D47;
        }

        .nss-service-card:hover::before {
            opacity: 1;
        }

        .nss-service-card:hover::after {
            transform: scaleX(1);
        }

        .nss-service-card:hover .nss-service-icon {
            transform: scale(1.1) rotate(5deg);
        }

        .nss-service-card:hover .nss-service-card-title {
            color: #DB9D47;
        }

        .nss-service-icon {
            font-size: 44px;
            color: #DB9D47;
            margin-bottom: 28px;
            display: block;
            line-height: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nss-service-card-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 22px;
            font-weight: 700;
            color: #0A1E2E;
            margin-bottom: 16px;
            line-height: 1.3;
            transition: color 0.3s ease;
        }

        .nss-service-text {
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            color: #666666;
            line-height: 1.7;
            margin-bottom: 24px;
        }

        .nss-service-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .nss-service-list li {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: #4a4a4a;
            padding: 10px 0;
            padding-left: 28px;
            position: relative;
            line-height: 1.6;
            transition: all 0.3s ease;
        }

        .nss-service-list li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 17px;
            width: 14px;
            height: 2px;
            background: #DB9D47;
            transition: width 0.3s ease;
        }

        .nss-service-card:hover .nss-service-list li::before {
            width: 18px;
        }

        /* CTA */
        .nss-services-cta {
            text-align: center;
            margin-top: 80px;
        }

        .nss-services-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 40px;
            background: #0A1E2E;
            color: #ffffff;
            font-family: 'Barlow', sans-serif;
            font-size: 15px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            border: 2px solid #0A1E2E;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .nss-services-cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s ease;
        }

        .nss-services-cta-button:hover::before {
            left: 100%;
        }

        .nss-services-cta-button:hover {
            background: transparent;
            color: #0A1E2E;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(10, 30, 46, 0.15);
        }

        .nss-services-cta-icon {
            font-size: 20px;
            transition: transform 0.3s ease;
        }

        .nss-services-cta-button:hover .nss-services-cta-icon {
            transform: translateX(4px);
        }

        /* Animations */
        .nss-service-card {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease forwards;
        }

        .nss-service-card:nth-child(1) { animation-delay: 0.1s; }
        .nss-service-card:nth-child(2) { animation-delay: 0.2s; }
        .nss-service-card:nth-child(3) { animation-delay: 0.3s; }
        .nss-service-card:nth-child(4) { animation-delay: 0.4s; }
        .nss-service-card:nth-child(5) { animation-delay: 0.5s; }
        .nss-service-card:nth-child(6) { animation-delay: 0.6s; }
        .nss-service-card:nth-child(7) { animation-delay: 0.7s; }
        .nss-service-card:nth-child(8) { animation-delay: 0.8s; }
        .nss-service-card:nth-child(9) { animation-delay: 0.9s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
            .nss-services {
                padding: 100px 5%;
            }

            .nss-services-title {
                font-size: 40px;
            }

            .nss-services-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 28px;
            }
        }

        @media (max-width: 768px) {
            .nss-services {
                padding: 80px 5%;
            }

            .nss-services-header {
                margin-bottom: 60px;
            }

            .nss-services-title {
                font-size: 34px;
            }

            .nss-services-description {
                font-size: 16px;
            }

            .nss-services-grid {
                grid-template-columns: 1fr;
                gap: 24px;
            }

            .nss-service-card {
                padding: 32px 28px;
            }

            .nss-services-cta {
                margin-top: 60px;
            }

            .nss-services-cta-button {
                width: 100%;
                justify-content: center;
                padding: 16px 32px;
            }
        }
    `;

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = styles;
        document.head.appendChild(style);
    }

    const servicesData = [
        {
            icon: 'ph-shield-check',
            title: 'Segurança Patrimonial',
            text: 'Proteção integral do seu patrimônio com equipes altamente treinadas e protocolos rigorosos de segurança.',
            items: [
                'Vigilância contínua 24/7',
                'Rondas preventivas programadas',
                'Controle de perímetro e acessos'
            ]
        },
        {
            icon: 'ph-user-focus',
            title: 'Segurança Pessoal VIP',
            text: 'Proteção discreta e especializada para executivos, celebridades e autoridades que exigem máxima segurança.',
            items: [
                'Escolta personalizada',
                'Análise prévia de riscos',
                'Profissionais certificados'
            ]
        },
        {
            icon: 'ph-monitor',
            title: 'Monitoramento e Portaria Remota',
            text: 'Tecnologia avançada de vigilância integrada com operação remota eficiente e resposta imediata.',
            items: [
                'Câmeras HD em tempo real',
                'Central de controle 24h',
                'Acionamento imediato'
            ]
        },
        {
            icon: 'ph-door-open',
            title: 'Portaria Presencial',
            text: 'Atendimento profissional e humanizado no controle de acessos do seu empreendimento.',
            items: [
                'Recepção e triagem',
                'Gestão de correspondências',
                'Registro de ocorrências'
            ]
        },
        {
            icon: 'ph-lock-key',
            title: 'Controle de Acesso',
            text: 'Sistemas inteligentes para gestão completa de fluxo de pessoas e veículos com tecnologia de ponta.',
            items: [
                'Tecnologia biométrica',
                'Integração de sistemas',
                'Relatórios em tempo real'
            ]
        },
        {
            icon: 'ph-broom',
            title: 'Limpeza e Conservação',
            text: 'Manutenção da qualidade e higiene dos ambientes com equipes especializadas e produtos certificados.',
            items: [
                'Limpeza corporativa',
                'Áreas condominiais',
                'Produtos certificados'
            ]
        },
        {
            icon: 'ph-wrench',
            title: 'Manutenção Predial',
            text: 'Serviços técnicos preventivos e corretivos para infraestrutura completa com atendimento ágil.',
            items: [
                'Instalações elétricas',
                'Sistemas hidráulicos',
                'Reparos estruturais'
            ]
        },
        {
            icon: 'ph-plant',
            title: 'Jardinagem e Paisagismo',
            text: 'Cuidado profissional de áreas verdes para valorizar e embelezar seu espaço com expertise.',
            items: [
                'Manutenção de jardins',
                'Projetos paisagísticos',
                'Adubação e poda técnica'
            ]
        },
        {
            icon: 'ph-users-three',
            title: 'Apoio Operacional',
            text: 'Equipe multifuncional para suporte nas demandas do dia a dia com serviços personalizados.',
            items: [
                'Recepcionistas',
                'Auxiliares operacionais',
                'Serviços customizados'
            ]
        }
    ];

    function createServicesSection() {
        const section = document.createElement('section');
        section.className = 'nss-services';
        section.id = 'servicos';

        const container = document.createElement('div');
        container.className = 'nss-services-container';

        const header = document.createElement('div');
        header.className = 'nss-services-header';
        header.innerHTML = `
            <span class="nss-services-tag">Nossos Serviços</span>
            <h2 class="nss-services-title">Soluções Integradas de Segurança e Facilities</h2>
            <p class="nss-services-description">
                Combinamos tecnologia de ponta, profissionalismo e anos de experiência para oferecer 
                serviços que garantem segurança, eficiência operacional e total tranquilidade 
                para nossos clientes corporativos e residenciais.
            </p>
        `;

        const grid = document.createElement('div');
        grid.className = 'nss-services-grid';

        servicesData.forEach(service => {
            const card = document.createElement('div');
            card.className = 'nss-service-card';

            const listItems = service.items
                .map(item => `<li>${item}</li>`)
                .join('');

            card.innerHTML = `
                <i class="ph ${service.icon} nss-service-icon"></i>
                <h3 class="nss-service-card-title">${service.title}</h3>
                <p class="nss-service-text">${service.text}</p>
                <ul class="nss-service-list">${listItems}</ul>
            `;

            grid.appendChild(card);
        });

        const cta = document.createElement('div');
        cta.className = 'nss-services-cta';
        cta.innerHTML = `
            <a href="https://wa.me/5511964448112?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20serviços%20da%20Noble%20Shield%20Security." class="nss-services-cta-button" target="_blank">
                Solicitar Orçamento
                <i class="ph ph-arrow-right nss-services-cta-icon"></i>
            </a>
        `;

        container.appendChild(header);
        container.appendChild(grid);
        container.appendChild(cta);
        section.appendChild(container);

        return section;
    }

    function init() {
        injectStyles();
        
        const root = document.getElementById('root');
        if (root) {
            const section = createServicesSection();
            root.appendChild(section);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
