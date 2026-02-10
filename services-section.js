// Noble Shield Security - Serviços (Versão Otimizada Mobile)
(function() {
    'use strict';

    const styles = `
        .nss-services {
            background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
            padding: 100px 6%;
            position: relative;
        }

        .nss-services-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .nss-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 70px;
        }

        .nss-header-tag {
            font-family: 'Barlow', sans-serif;
            font-size: 12px;
            font-weight: 700;
            color: #DB9D47;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            margin-bottom: 16px;
            display: inline-block;
            position: relative;
            padding: 0 26px;
        }

        .nss-header-tag::before,
        .nss-header-tag::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 18px;
            height: 1px;
            background: #DB9D47;
        }

        .nss-header-tag::before {
            left: 0;
        }

        .nss-header-tag::after {
            right: 0;
        }

        .nss-header-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 42px;
            font-weight: 700;
            color: #0A1E2E;
            margin-bottom: 20px;
            line-height: 1.25;
            letter-spacing: -0.5px;
        }

        .nss-header-description {
            font-family: 'Barlow', sans-serif;
            font-size: 16px;
            color: #666666;
            line-height: 1.7;
            max-width: 680px;
            margin: 0 auto;
        }

        .nss-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
        }

        .nss-card {
            background: #ffffff;
            padding: 36px 30px;
            border: 1px solid #ebebeb;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
        }

        .nss-card::before {
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

        .nss-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: linear-gradient(90deg, #DB9D47 0%, #C4986A 100%);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nss-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 36px rgba(10, 30, 46, 0.1);
            border-color: #DB9D47;
        }

        .nss-card:hover::before {
            opacity: 1;
        }

        .nss-card:hover::after {
            transform: scaleX(1);
        }

        .nss-card:hover .nss-card-icon {
            transform: scale(1.08) rotate(5deg);
        }

        .nss-card:hover .nss-card-title {
            color: #DB9D47;
        }

        .nss-card-icon {
            font-size: 38px;
            color: #DB9D47;
            margin-bottom: 22px;
            display: block;
            line-height: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nss-card-title {
            font-family: 'Satoshi', sans-serif;
            font-size: 19px;
            font-weight: 700;
            color: #0A1E2E;
            margin-bottom: 14px;
            line-height: 1.3;
            transition: color 0.3s ease;
        }

        .nss-card-text {
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            color: #666666;
            line-height: 1.65;
            margin-bottom: 20px;
        }

        .nss-card-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .nss-card-list li {
            font-family: 'Barlow', sans-serif;
            font-size: 13px;
            color: #4a4a4a;
            padding: 8px 0;
            padding-left: 24px;
            position: relative;
            line-height: 1.5;
            transition: all 0.3s ease;
        }

        .nss-card-list li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 15px;
            width: 12px;
            height: 2px;
            background: #DB9D47;
            transition: width 0.3s ease;
        }

        .nss-card:hover .nss-card-list li::before {
            width: 16px;
        }

        .nss-cta-wrapper {
            text-align: center;
            margin-top: 70px;
        }

        .nss-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 16px 36px;
            background: #0A1E2E;
            color: #ffffff;
            font-family: 'Barlow', sans-serif;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            border: 2px solid #0A1E2E;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .nss-cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.6s ease;
        }

        .nss-cta-button:hover::before {
            left: 100%;
        }

        .nss-cta-button:hover {
            background: transparent;
            color: #0A1E2E;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(10, 30, 46, 0.12);
        }

        .nss-cta-icon {
            font-size: 18px;
            transition: transform 0.3s ease;
        }

        .nss-cta-button:hover .nss-cta-icon {
            transform: translateX(4px);
        }

        /* Animação de entrada */
        .nss-card {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.6s ease forwards;
        }

        .nss-card:nth-child(1) { animation-delay: 0.1s; }
        .nss-card:nth-child(2) { animation-delay: 0.2s; }
        .nss-card:nth-child(3) { animation-delay: 0.3s; }
        .nss-card:nth-child(4) { animation-delay: 0.4s; }
        .nss-card:nth-child(5) { animation-delay: 0.5s; }
        .nss-card:nth-child(6) { animation-delay: 0.6s; }
        .nss-card:nth-child(7) { animation-delay: 0.7s; }
        .nss-card:nth-child(8) { animation-delay: 0.8s; }
        .nss-card:nth-child(9) { animation-delay: 0.9s; }

        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 1024px) {
            .nss-services {
                padding: 80px 5%;
            }

            .nss-header-title {
                font-size: 36px;
            }

            .nss-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
            }
        }

        @media (max-width: 768px) {
            .nss-services {
                padding: 60px 5%;
            }

            .nss-header {
                margin-bottom: 50px;
            }

            .nss-header-tag {
                font-size: 11px;
                letter-spacing: 2px;
                padding: 0 20px;
                margin-bottom: 12px;
            }

            .nss-header-tag::before,
            .nss-header-tag::after {
                width: 14px;
            }

            .nss-header-title {
                font-size: 28px;
                margin-bottom: 16px;
            }

            .nss-header-description {
                font-size: 14px;
                line-height: 1.6;
            }

            .nss-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .nss-card {
                padding: 28px 24px;
            }

            .nss-card-icon {
                font-size: 32px;
                margin-bottom: 18px;
            }

            .nss-card-title {
                font-size: 17px;
                margin-bottom: 12px;
            }

            .nss-card-text {
                font-size: 13px;
                margin-bottom: 16px;
            }

            .nss-card-list li {
                font-size: 12px;
                padding: 7px 0;
                padding-left: 20px;
            }

            .nss-card-list li::before {
                top: 13px;
                width: 10px;
            }

            .nss-cta-wrapper {
                margin-top: 50px;
            }

            .nss-cta-button {
                width: 100%;
                justify-content: center;
                padding: 14px 28px;
                font-size: 13px;
                letter-spacing: 1px;
            }

            .nss-cta-icon {
                font-size: 16px;
            }
        }

        @media (max-width: 480px) {
            .nss-services {
                padding: 50px 5%;
            }

            .nss-header-title {
                font-size: 24px;
            }

            .nss-card {
                padding: 24px 20px;
            }

            .nss-card-icon {
                font-size: 28px;
            }

            .nss-card-title {
                font-size: 16px;
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
        header.className = 'nss-header';
        header.innerHTML = `
            <span class="nss-header-tag">Nossos Serviços</span>
            <h2 class="nss-header-title">Soluções Integradas de Segurança e Facilities</h2>
            <p class="nss-header-description">
                Combinamos tecnologia de ponta, profissionalismo e anos de experiência para oferecer 
                serviços que garantem segurança, eficiência operacional e total tranquilidade 
                para nossos clientes corporativos e residenciais.
            </p>
        `;

        const grid = document.createElement('div');
        grid.className = 'nss-grid';

        servicesData.forEach(service => {
            const card = document.createElement('div');
            card.className = 'nss-card';

            const listItems = service.items
                .map(item => `<li>${item}</li>`)
                .join('');

            card.innerHTML = `
                <i class="ph ${service.icon} nss-card-icon"></i>
                <h3 class="nss-card-title">${service.title}</h3>
                <p class="nss-card-text">${service.text}</p>
                <ul class="nss-card-list">${listItems}</ul>
            `;

            grid.appendChild(card);
        });

        const ctaWrapper = document.createElement('div');
        ctaWrapper.className = 'nss-cta-wrapper';
        ctaWrapper.innerHTML = `
            <a href="https://wa.me/5511964448112?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20os%20serviços%20da%20Noble%20Shield%20Security." class="nss-cta-button" target="_blank">
                Solicitar Orçamento
                <i class="ph ph-arrow-right nss-cta-icon"></i>
            </a>
        `;

        container.appendChild(header);
        container.appendChild(grid);
        container.appendChild(ctaWrapper);
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