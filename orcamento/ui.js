// ========== INTERFACE E RENDERIZAÇÃO ==========

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    setupEventListeners();
    renderServices();
    renderTopics();
    updatePreview();
    
    // Prevenir zoom no duplo clique
    document.getElementById('a4Preview').addEventListener('dblclick', function(e) {
        e.preventDefault();
    });
});

// Configurar event listeners
function setupEventListeners() {
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });
    
    // Inputs de dados
    document.getElementById('clientName').addEventListener('input', function() {
        updatePreview();
        saveData();
    });
    
    document.getElementById('projectName').addEventListener('input', function() {
        updatePreview();
        saveData();
    });
    
    // Botões
    document.getElementById('addServiceBtn').addEventListener('click', addService);
    document.getElementById('addTopicBtn').addEventListener('click', addTopic);
    document.getElementById('clearBtn').addEventListener('click', clearAllData);
    
    // Modal mobile
    const mobilePreviewBtn = document.getElementById('mobilePreviewBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('mobilePreviewModal');
    
    if (mobilePreviewBtn) {
        mobilePreviewBtn.addEventListener('click', function() {
            openMobilePreview();
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }
    
    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Controle de abas
function switchTab(tabName) {
    // Remove active de todas as abas e conteúdos
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Adiciona active na aba e conteúdo correspondente
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
}

// Renderizar serviços
function renderServices() {
    const container = document.getElementById('services-list');
    container.innerHTML = '';

    appState.services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.innerHTML = `
            <button class="remove-service-btn" onclick="removeService(${service.id})" title="Remover serviço">
                <i class="ph ph-x"></i>
            </button>
            <div class="service-form">
                <div class="form-group">
                    <label class="form-label">Nome do Serviço</label>
                    <input type="text" 
                           class="form-input" 
                           placeholder="Ex: Segurança Patrimonial" 
                           value="${service.name}" 
                           onchange="updateService(${service.id}, 'name', this.value)"
                           oninput="updateService(${service.id}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label class="form-label">Valor (R$)</label>
                    <input type="number" 
                           class="form-input" 
                           placeholder="0,00" 
                           step="0.01" 
                           min="0"
                           value="${service.value}" 
                           onchange="updateService(${service.id}, 'value', parseFloat(this.value) || 0)"
                           oninput="updateService(${service.id}, 'value', parseFloat(this.value) || 0)">
                </div>
                <div class="form-group">
                    <label class="form-label">Tipo de Cobrança</label>
                    <select class="form-input" onchange="updateService(${service.id}, 'type', this.value)">
                        <option value="fixo" ${service.type === 'fixo' ? 'selected' : ''}>Valor Fixo (Único)</option>
                        <option value="mensal" ${service.type === 'mensal' ? 'selected' : ''}>Valor Mensal (Recorrente)</option>
                        <option value="anual" ${service.type === 'anual' ? 'selected' : ''}>Valor Anual (Recorrente)</option>
                    </select>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
    
    updatePreview();
}

// Renderizar tópicos
function renderTopics() {
    const container = document.getElementById('topics-list');
    container.innerHTML = '';

    appState.topics.forEach(topic => {
        const div = document.createElement('div');
        div.className = 'topic-card';
        div.innerHTML = `
            <button class="remove-service-btn" onclick="removeTopic(${topic.id})" title="Remover tópico">
                <i class="ph ph-x"></i>
            </button>
            <div class="form-group">
                <label class="form-label">Título</label>
                <input type="text" 
                       class="form-input" 
                       placeholder="Ex: Metodologia de Trabalho" 
                       value="${topic.title}" 
                       onchange="updateTopic(${topic.id}, 'title', this.value)"
                       oninput="updateTopic(${topic.id}, 'title', this.value)">
            </div>
            <div class="form-group">
                <label class="form-label">Descrição</label>
                <textarea class="form-textarea" 
                          placeholder="Descreva os detalhes deste tópico..." 
                          onchange="updateTopic(${topic.id}, 'description', this.value)"
                          oninput="updateTopic(${topic.id}, 'description', this.value)">${topic.description}</textarea>
            </div>
        `;
        container.appendChild(div);
    });
    
    updatePreview();
}

// Criar cabeçalho da página
function createPageHeader(pageNumber, totalPages) {
    return `
        <div class="page-header">
            <div class="document-header">
                <div class="company-branding">
                    <img src="./logo.png" alt="Noble Shield Security">
                </div>
                <div>
                    <div class="phone"><i class="ph-fill ph-phone"></i> 11 9 6444-8112</div>
                    <div class="email"><i class="ph ph-envelope"></i> secnobless@gmail.com</div>
                </div>
                <div class="document-info">
                    <div class="page-number">Página ${pageNumber} de ${totalPages}</div>
                    <div class="document-title">PROPOSTA COMERCIAL</div>
                    <div class="document-number">${appState.documentNumber}</div>
                </div>
            </div>
        </div>
    `;
}

// Criar rodapé da página
function createPageFooter() {
    return `
        <div class="document-footer">
            <div class="footer-left">
                <div>Noble Shield Security - Soluções em Segurança</div>
                <div>Documento gerado em ${appState.generationDate}</div>
                <div class="phone"><i class="ph-fill ph-phone"></i> 11 9 6444-8112</div>
            </div>
            <div class="footer-right">
                <div>Número do documento:</div>
                <div class="document-code">${appState.documentNumber}</div>
            </div>
        </div>
    `;
}

// Criar seção de cliente
function createClientSection() {
    const clientName = document.getElementById('clientName').value || 'Nome do Cliente';
    const projectName = document.getElementById('projectName').value || 'Nome do Projeto';
    
    return `
        <div class="client-section">
            <h3 class="section-title">
                <i class="ph ph-user"></i> Informações do Cliente
            </h3>
            <div class="client-grid">
                <div class="client-field">
                    <span class="label">Cliente</span>
                    <span class="value">${clientName}</span>
                </div>
                <div class="client-field">
                    <span class="label">Projeto</span>
                    <span class="value">${projectName}</span>
                </div>
            </div>
        </div>
    `;
}

// Criar seção de serviços
function createServicesSection() {
    let servicesHTML = '';
    const validServices = appState.services.filter(s => s.name.trim());

    if (validServices.length === 0) {
        servicesHTML = `
            <tr>
                <td colspan="3" style="text-align: center; color: #9ca3af; font-style: italic; padding: 2rem;">
                    Nenhum serviço adicionado
                </td>
            </tr>
        `;
    } else {
        validServices.forEach(service => {
            servicesHTML += `
                <tr>
                    <td class="service-name">${service.name}</td>
                    <td style="text-align: center;">
                        <span class="service-type-badge ${service.type === 'fixo' ? 'type-fixo' : service.type === 'mensal' ? 'type-mensal' : 'type-anual'}">
                            ${service.type === 'fixo' ? 'Fixo' : service.type === 'mensal' ? 'Mensal' : 'Anual'}
                        </span>
                    </td>
                    <td style="text-align: right; font-weight: 600;">
                        R$ ${service.value.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    </td>
                </tr>
            `;
        });
    }

    return `
        <div class="services-section">
            <h3 class="section-title">
                <i class="ph ph-list-checks"></i> Serviços Propostos
            </h3>
            <table class="services-table">
                <thead>
                    <tr>
                        <th>Serviço</th>
                        <th style="text-align: center;">Tipo</th>
                        <th style="text-align: right;">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${servicesHTML}
                </tbody>
            </table>
        </div>
    `;
}

// Função para calcular altura do conteúdo
function getContentHeight(content) {
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.top = '-9999px';
    tempDiv.style.width = '210mm';
    tempDiv.style.fontSize = '16px';
    tempDiv.style.lineHeight = '1.6';
    tempDiv.style.fontFamily = 'Barlow, sans-serif';
    tempDiv.innerHTML = content;
    
    document.body.appendChild(tempDiv);
    const height = tempDiv.offsetHeight;
    document.body.removeChild(tempDiv);
    
    return height;
}

// Criar HTML de um tópico
function createTopicHTML(topic) {
    return `
        <div class="topic-item">
            ${topic.title.trim() ? `<div class="topic-title">${topic.title}</div>` : ''}
            ${topic.description.trim() ? `<div class="topic-description">${topic.description}</div>` : ''}
        </div>
    `;
}

// Criar uma página
function createPage(pageNumber, totalPages, content, container) {
    const page = document.createElement('div');
    page.className = 'page';
    page.innerHTML = `
        ${createPageHeader(pageNumber, totalPages)}
        ${content}
        ${createPageFooter()}
    `;
    
    container.appendChild(page);
}

// Atualizar preview do documento
function updatePreview() {
    appState.documentNumber = generateDocNumber();
    const now = new Date();
    appState.generationDate = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR');
    
    const preview = document.getElementById('a4Preview');
    preview.innerHTML = '';

    const MAX_PAGE_HEIGHT = 1150;
    const HEADER_HEIGHT = 140;
    const FOOTER_HEIGHT = 60;
    const AVAILABLE_HEIGHT = MAX_PAGE_HEIGHT - HEADER_HEIGHT - FOOTER_HEIGHT;

    const clientSection = createClientSection();
    const servicesSection = createServicesSection();

    const clientHeight = Math.max(getContentHeight(clientSection), 120);
    const servicesHeight = Math.max(getContentHeight(servicesSection), 200);
    const baseContentHeight = clientHeight + servicesHeight + 40;

    const validTopics = appState.topics.filter(t => (t.title || '').trim() || (t.description || '').trim());

    if (validTopics.length === 0) {
        const firstPageContent = `<div class="page-content">${clientSection}${servicesSection}</div>`;
        createPage(1, 1, firstPageContent, preview);
        return;
    }

    const topicsHeaderHtml = `<div class="topics-section"><h3 class="section-title"><i class="ph ph-article"></i> Informações Complementares</h3></div>`;
    const topicsHeaderHeight = Math.max(getContentHeight(topicsHeaderHtml), 50);

    const pages = [];
    let remaining = validTopics.slice();

    // Primeira página
    let firstPageTopics = [];
    let availableHeightFirstPage = AVAILABLE_HEIGHT - baseContentHeight;

    if (availableHeightFirstPage > topicsHeaderHeight + 80) {
        let currentHeight = topicsHeaderHeight;
        
        for (let i = 0; i < remaining.length; i++) {
            const topic = remaining[i];
            const topicHtml = createTopicHTML(topic);
            const topicHeight = Math.max(getContentHeight(topicHtml), 60);
            
            if (currentHeight + topicHeight <= availableHeightFirstPage) {
                currentHeight += topicHeight + 20;
                firstPageTopics.push(topic);
            } else {
                break;
            }
        }
    }

    remaining.splice(0, firstPageTopics.length);

    let firstPageContent = `<div class="page-content">${clientSection}${servicesSection}`;
    if (firstPageTopics.length > 0) {
        firstPageContent += `<div class="topics-section"><h3 class="section-title"><i class="ph ph-article"></i> Informações Complementares</h3>`;
        firstPageContent += firstPageTopics.map(t => createTopicHTML(t)).join('');
        firstPageContent += `</div>`;
    }
    firstPageContent += `</div>`;
    pages.push({ content: firstPageContent });

    // Páginas seguintes
    while (remaining.length > 0) {
        let pageTopics = [];
        let currentHeight = topicsHeaderHeight;

        for (let i = 0; i < remaining.length; i++) {
            const topic = remaining[i];
            const topicHtml = createTopicHTML(topic);
            const topicHeight = Math.max(getContentHeight(topicHtml), 60);
            
            if (currentHeight + topicHeight <= AVAILABLE_HEIGHT) {
                currentHeight += topicHeight + 20;
                pageTopics.push(topic);
            } else {
                if (pageTopics.length === 0) {
                    pageTopics.push(topic);
                }
                break;
            }
        }

        if (pageTopics.length === 0 && remaining.length > 0) {
            pageTopics.push(remaining[0]);
        }

        remaining.splice(0, pageTopics.length);

        const pageContent = `
            <div class="page-content">
                <div class="topics-section">
                    <h3 class="section-title"><i class="ph ph-article"></i> Informações Complementares</h3>
                    ${pageTopics.map(t => createTopicHTML(t)).join('')}
                </div>
            </div>
        `;
        pages.push({ content: pageContent });
    }

    const totalPages = pages.length;
    pages.forEach((pageData, index) => {
        const pageNumber = index + 1;
        createPage(pageNumber, totalPages, pageData.content, preview);
    });
}

// Abrir preview mobile
function openMobilePreview() {
    const modal = document.getElementById('mobilePreviewModal');
    const modalPreview = document.getElementById('modalPreview');
    
    // Copiar conteúdo do preview
    modalPreview.innerHTML = document.getElementById('a4Preview').outerHTML;
    
    modal.classList.add('active');
}