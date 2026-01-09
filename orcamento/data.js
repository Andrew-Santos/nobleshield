// ========== GERENCIAMENTO DE DADOS ==========

// Estado da aplicação
const appState = {
    services: [],
    topics: [],
    documentNumber: '',
    generationDate: '',
};

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

// Inicializar dados
function initializeData() {
    appState.documentNumber = generateDocNumber();
    const now = new Date();
    appState.generationDate = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR');
    
    loadData();
}

// Salvar dados no localStorage
function saveData() {
    const data = {
        clientName: document.getElementById('clientName').value,
        projectName: document.getElementById('projectName').value,
        services: appState.services,
        topics: appState.topics,
        docNumber: appState.documentNumber,
        savedAt: new Date().toISOString()
    };
    
    try {
        localStorage.setItem('noble_shield_orcamento', JSON.stringify(data));
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        alert('Erro ao salvar os dados. Por favor, tente novamente.');
    }
}

// Carregar dados do localStorage
function loadData() {
    const savedData = localStorage.getItem('noble_shield_orcamento');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            
            document.getElementById('clientName').value = data.clientName || '';
            document.getElementById('projectName').value = data.projectName || '';
            appState.services = data.services || [];
            appState.topics = data.topics || [];
            
            // Manter número do documento se for do mesmo dia
            const savedDate = new Date(data.savedAt);
            const today = new Date();
            if (savedDate.toDateString() === today.toDateString() && data.docNumber) {
                appState.documentNumber = data.docNumber;
            }
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
        }
    }
}

// Limpar todos os dados
function clearAllData() {
    if (confirm('Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.')) {
        localStorage.removeItem('noble_shield_orcamento');
        
        document.getElementById('clientName').value = '';
        document.getElementById('projectName').value = '';
        appState.services = [];
        appState.topics = [];
        
        appState.documentNumber = generateDocNumber();
        
        // Atualizar UI
        if (window.renderServices) renderServices();
        if (window.renderTopics) renderTopics();
        if (window.updatePreview) updatePreview();
        
        // Feedback visual
        const clearBtn = document.getElementById('clearBtn');
        const originalText = clearBtn.innerHTML;
        clearBtn.innerHTML = '<i class="ph ph-check"></i> Dados Limpos!';
        setTimeout(() => {
            clearBtn.innerHTML = originalText;
        }, 2000);
    }
}

// Gerenciamento de Serviços
function addService() {
    const service = {
        id: Date.now(),
        name: '',
        value: 0,
        type: 'fixo'
    };
    appState.services.push(service);
    if (window.renderServices) renderServices();
    saveData();
}

function removeService(id) {
    if (confirm('Deseja remover este serviço?')) {
        appState.services = appState.services.filter(service => service.id !== id);
        if (window.renderServices) renderServices();
        if (window.updatePreview) updatePreview();
        saveData();
    }
}

function updateService(id, field, value) {
    const service = appState.services.find(s => s.id === id);
    if (service) {
        service[field] = value;
        if (window.updatePreview) updatePreview();
        saveData();
    }
}

// Gerenciamento de Tópicos
function addTopic() {
    const topic = {
        id: Date.now(),
        title: '',
        description: ''
    };
    appState.topics.push(topic);
    if (window.renderTopics) renderTopics();
    saveData();
}

function removeTopic(id) {
    if (confirm('Deseja remover este tópico?')) {
        appState.topics = appState.topics.filter(topic => topic.id !== id);
        if (window.renderTopics) renderTopics();
        if (window.updatePreview) updatePreview();
        saveData();
    }
}

function updateTopic(id, field, value) {
    const topic = appState.topics.find(t => t.id === id);
    if (topic) {
        topic[field] = value;
        if (window.updatePreview) updatePreview();
        saveData();
    }
}

// Auto-save ao fechar
window.addEventListener('beforeunload', function() {
    saveData();
});

// Atalhos de teclado
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
            e.preventDefault();
            saveData();
        }
    }
});