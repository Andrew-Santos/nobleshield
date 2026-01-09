let currentZoom = 1;
let services = [];
let topics = [];
let documentNumber = '';
let generationDate = '';

// Gerar número do documento
function generateDocNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `NSS-${year}${month}${day}-${hours}${minutes}${seconds}`;
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    documentNumber = generateDocNumber();
    const now = new Date();
    generationDate = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR');
    
    loadData();
    updatePreview();
});

// Controles de zoom
function zoomIn() {
    currentZoom = Math.min(currentZoom + 0.1, 2);
    updateZoom();
}

function zoomOut() {
    currentZoom = Math.max(currentZoom - 0.1, 0.3);
    updateZoom();
}

function updateZoom() {
    const preview = document.getElementById('a4Preview');
    preview.style.transform = `scale(${currentZoom})`;
    document.getElementById('zoomLevel').textContent = Math.round(currentZoom * 100) + '%';
}

// Controle de abas
function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
}

// Gerenciamento de serviços
function addService() {
    const service = {
        id: Date.now(),
        name: '',
        value: 0,
        type: 'fixo'
    };
    services.push(service);
    renderServices();
}

function removeService(id) {
    services = services.filter(service => service.id !== id);
    renderServices();
    updatePreview();
    saveData();
}

function renderServices() {
    const container = document.getElementById('services-list');
    container.innerHTML = '';

    services.forEach(service => {
        const div = document.createElement('div');
        div.className = 'service-card';
        div.innerHTML = `
            <button class="remove-service-btn" onclick="removeService(${service.id})">
                <i class="ph ph-x"></i>
            </button>
            <div class="service-form">
                <div class="form-group">
                    <label class="form-label">Nome do Serviço</label>
                    <input type="text" class="form-input" placeholder="Ex: Segurança Patrimonial" 
                           value="${service.name}" onchange="updateService(${service.id}, 'name', this.value)">
                </div>
                <div class="form-group">
                    <label class="form-label">Valor</label>
                    <input type="number" class="form-input" placeholder="0,00" step="0.01" 
                           value="${service.value}" onchange="updateService(${service.id}, 'value', parseFloat(this.value) || 0)">
                </div>
                <div class="form-group service-type">
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

function updateService(id, field, value) {
    const service = services.find(s => s.id === id);
    if (service) {
        service[field] = value;
        updatePreview();
        saveData();
    }
}

// Gerenciamento de tópicos
function addTopic() {
    const topic = {
        id: Date.now(),
        title: '',
        description: ''
    };
    topics.push(topic);
    renderTopics();
}

function removeTopic(id) {
    topics = topics.filter(topic => topic.id !== id);
    renderTopics();
    updatePreview();
    saveData();
}

function renderTopics() {
    const container = document.getElementById('topics-list');
    container.innerHTML = '';

    topics.forEach(topic => {
        const div = document.createElement('div');
        div.className = 'topic-card';
        div.innerHTML = `
            <button class="remove-service-btn" onclick="removeTopic(${topic.id})">
                <i class="ph ph-x"></i>
            </button>
            <div class="form-group">
                <label class="form-label">Título</label>
                <input type="text" class="form-input" placeholder="Ex: Metodologia de Trabalho" 
                       value="${topic.title}" onchange="updateTopic(${topic.id}, 'title', this.value)">
            </div>
            <div class="form-group">
                <label class="form-label">Descrição</label>
                <textarea class="form-textarea" placeholder="Descreva os detalhes deste tópico..." 
                          onchange="updateTopic(${topic.id}, 'description', this.value)">${topic.description}</textarea>
            </div>
        `;
        container.appendChild(div);
    });
    
    updatePreview();
}

function updateTopic(id, field, value) {
    const topic = topics.find(t => t.id === id);
    if (topic) {
        topic[field] = value;
        updatePreview();
        saveData();
    }
}

// Criar cabeçalho da página (padronizado)
function createPageHeader(pageNumber, totalPages) {
    return `
        
        <div class="page-header">
            <div class="document-header">
                <div class="company-branding">
                    <img src="./logo.png" alt="Noble Shield Security">
                    
                    
                </div>
                <div>
                
                    <div class="phone"><i class="ph-fill ph-phone"></i> 11 9 6444-8112 </div>
                    <div class="email"><i class="ph ph-envelope"></i>secnobless@gmail.com</div>
                
                </div>
                
                
                <div class="document-info">
                    <div class="page-number">Página ${pageNumber} de ${totalPages}</div>
                    <div class="document-title">PROPOSTA COMERCIAL</div>
                    <div class="document-number">${documentNumber}</div>
                    
                    
                </div>
                
            </div>
        </div>
    `;
}

// Criar rodapé da página (padronizado)
function createPageFooter() {
    return `
        <div class="document-footer">
            <div class="footer-left">
                <div>Noble Shield Security - Soluções em Segurança </div>
                <div>Documento gerado em ${generationDate}</div>
                <div class="phone"><i class="ph-fill ph-phone"></i> 11 9 6444-8112</div>
                
            </div>
            
            <div class="footer-right">
                <div>Número do documento:</div>
                <div class="document-code">${documentNumber}</div>
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
    let totalFixo = 0;
    let totalMensal = 0;
    let totalAnual = 0;

    services.forEach(service => {
        if (service.name.trim()) {
            servicesHTML += `
                <tr>
                    <td class="service-name">${service.name}</td>
                    <td style="text-align: center;">
                        <span class="service-type-badge 
                            ${service.type === 'fixo' ? 'type-fixo' : service.type === 'mensal' ? 'type-mensal' : 'type-anual'}">
                            ${service.type === 'fixo' ? 'Fixo' : service.type === 'mensal' ? 'Mensal' : 'Anual'}
                        </span>
                    </td>
                    <td style="text-align: right; font-weight: 600;">
                        R$ ${service.value.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                    </td>
                </tr>
            `;

            if (service.type === 'fixo') {
                totalFixo += service.value;
            } else if (service.type === 'mensal') {
                totalMensal += service.value;
            } else {
                totalAnual += service.value;
            }
        }
    });

    if (services.length === 0 || !services.some(s => s.name.trim())) {
        servicesHTML = `
            <tr>
                <td colspan="3" style="text-align: center; color: #9ca3af; font-style: italic; padding: 2rem;">
                    Nenhum serviço adicionado
                </td>
            </tr>
        `;
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
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${servicesHTML}
                </tbody>
            </table>
        </div>
    `;
}

// Função para calcular altura real do conteúdo
function getContentHeight(content) {
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    tempDiv.style.top = '-9999px';
    tempDiv.style.width = '210mm';
    tempDiv.style.fontSize = '16px';
    tempDiv.style.lineHeight = '1.6';
    tempDiv.style.fontFamily = 'Barlow, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    tempDiv.innerHTML = content;
    
    document.body.appendChild(tempDiv);
    const height = tempDiv.offsetHeight;
    document.body.removeChild(tempDiv);
    
    return height;
}

// Função principal de atualização do preview
function updatePreview() {
    // Atualizar número do documento e data em tempo real
    documentNumber = generateDocNumber();
    const now = new Date();
    generationDate = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR');
    
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

    const validTopics = topics.filter(t => (t.title || '').trim() || (t.description || '').trim());

    if (validTopics.length === 0) {
        const firstPageContent = `<div class="page-content">${clientSection}${servicesSection}</div>`;
        createPage(1, 1, firstPageContent);
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
        createPage(pageNumber, totalPages, pageData.content);
    });
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
function createPage(pageNumber, totalPages, content) {
    const preview = document.getElementById('a4Preview');
    
    const page = document.createElement('div');
    page.className = 'page';
    page.innerHTML = `
        ${createPageHeader(pageNumber, totalPages)}
        ${content}
        ${createPageFooter()}
    `;
    
    preview.appendChild(page);
}

// Eventos de input com auto-save
document.getElementById('clientName').addEventListener('input', function() {
    updatePreview();
    saveData();
});

document.getElementById('projectName').addEventListener('input', function() {
    updatePreview();
    saveData();
});

// Salvar/Carregar dados
function saveData() {
    const data = {
        clientName: document.getElementById('clientName').value,
        projectName: document.getElementById('projectName').value,
        services: services,
        topics: topics,
        docNumber: documentNumber,
        savedAt: new Date().toISOString()
    };
    
    localStorage.setItem('noble_shield_orcamento', JSON.stringify(data));
}

function loadData() {
    const savedData = localStorage.getItem('noble_shield_orcamento');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            document.getElementById('clientName').value = data.clientName || '';
            document.getElementById('projectName').value = data.projectName || '';
            services = data.services || [];
            topics = data.topics || [];
            
            const savedDate = new Date(data.savedAt);
            const today = new Date();
            if (savedDate.toDateString() === today.toDateString() && data.docNumber) {
                documentNumber = data.docNumber;
            }
            
            renderServices();
            renderTopics();
            updatePreview();
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    }
}

function clearData() {
    if (confirm('Tem certeza que deseja apagar todos os dados? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('noble_shield_orcamento');
        
        document.getElementById('clientName').value = '';
        document.getElementById('projectName').value = '';
        services = [];
        topics = [];
        
        documentNumber = generateDocNumber();
        
        renderServices();
        renderTopics();
        updatePreview();
        
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="ph ph-check"></i> Apagado!';
        btn.style.background = '#059669';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#dc2626';
        }, 2000);
    }
}

// Exportar como PDF
function shareAsPDF() {
    const projectName = document.getElementById('projectName').value || 'Projeto';
    const filename = `Proposta ${documentNumber} - ${projectName}.pdf`;
    
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Gerando PDF...';
    btn.disabled = true;
    
    const element = document.getElementById('a4Preview');
    const originalTransform = element.style.transform;
    element.style.transform = 'scale(1)';
    
    const options = {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: element.offsetWidth,
        height: element.offsetHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.offsetWidth,
        windowHeight: element.offsetHeight
    };
    
    html2canvas(element, options).then(canvas => {
        element.style.transform = originalTransform;
        
        try {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
                compress: true
            });
            
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            if (imgHeight <= pageHeight) {
                pdf.addImage(
                    canvas.toDataURL('image/png', 0.95),
                    'PNG',
                    0,
                    0,
                    imgWidth,
                    imgHeight,
                    undefined,
                    'FAST'
                );
            } else {
                let remainingHeight = imgHeight;
                let position = 0;
                let pageNum = 0;
                
                while (remainingHeight > 0) {
                    const currentPageHeight = Math.min(pageHeight, remainingHeight);
                    const sourceY = (pageHeight * pageNum * canvas.height) / imgHeight;
                    const sourceHeight = (currentPageHeight * canvas.height) / imgHeight;
                    
                    const pageCanvas = document.createElement('canvas');
                    const pageCtx = pageCanvas.getContext('2d');
                    pageCanvas.width = canvas.width;
                    pageCanvas.height = sourceHeight;
                    
                    pageCtx.drawImage(
                        canvas,
                        0, sourceY, canvas.width, sourceHeight,
                        0, 0, canvas.width, sourceHeight
                    );
                    
                    if (pageNum > 0) {
                        pdf.addPage();
                    }
                    
                    pdf.addImage(
                        pageCanvas.toDataURL('image/png', 0.95),
                        'PNG',
                        0,
                        0,
                        imgWidth,
                        currentPageHeight,
                        undefined,
                        'FAST'
                    );
                    
                    remainingHeight -= currentPageHeight;
                    pageNum++;
                }
            }
            
            pdf.save(filename);
            
            btn.innerHTML = '<i class="ph ph-check"></i> PDF Exportado!';
            btn.style.background = '#059669';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#0A1E46';
                btn.disabled = false;
            }, 3000);
            
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            btn.innerHTML = '<i class="ph ph-warning"></i> Erro ao gerar PDF';
            btn.style.background = '#dc2626';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#0A1E46';
                btn.disabled = false;
            }, 3000);
        }
    }).catch(error => {
        element.style.transform = originalTransform;
        console.error('Erro ao capturar elemento:', error);
        
        btn.innerHTML = '<i class="ph ph-warning"></i> Erro na captura';
        btn.style.background = '#dc2626';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#0A1E46';
            btn.disabled = false;
        }, 3000);
    });
}

// Auto-save
window.addEventListener('beforeunload', function() {
    saveData();
});

// Atalhos de teclado
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 's':
                e.preventDefault();
                saveData();
                const saveBtn = document.querySelector('.btn-success');
                const originalText = saveBtn.innerHTML;
                saveBtn.innerHTML = '<i class="ph ph-check"></i> Salvo!';
                setTimeout(() => {
                    saveBtn.innerHTML = originalText;
                }, 1500);
                break;
            case '=':
            case '+':
                e.preventDefault();
                zoomIn();
                break;
            case '-':
                e.preventDefault();
                zoomOut();
                break;
        }
    }
});