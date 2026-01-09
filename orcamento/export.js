// ========== EXPORT E COMPARTILHAMENTO ==========

// Configurar event listeners de exportação
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadBtn').addEventListener('click', downloadPDF);
    document.getElementById('shareBtn').addEventListener('click', sharePDF);
});

// Pré-carregar imagens
async function preloadImages(element) {
    const images = element.querySelectorAll('img');
    const promises = Array.from(images).map(img => {
        return new Promise((resolve) => {
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
                img.onerror = resolve;
                // Forçar reload se necessário
                if (!img.src.startsWith('data:')) {
                    const currentSrc = img.src;
                    img.src = '';
                    img.src = currentSrc;
                }
            }
        });
    });
    await Promise.all(promises);
}

// Aguardar fontes carregarem
async function waitForFonts() {
    if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
    }
    // Aguardar um pouco mais para garantir
    await new Promise(resolve => setTimeout(resolve, 500));
}

// Gerar PDF
async function generatePDF() {
    const projectName = document.getElementById('projectName').value || 'Projeto';
    const filename = `Proposta ${appState.documentNumber} - ${projectName}.pdf`;
    
    const element = document.getElementById('a4Preview');
    const pages = element.querySelectorAll('.page');
    
    if (pages.length === 0) {
        throw new Error('Nenhuma página encontrada para gerar PDF');
    }
    
    try {
        // Aguardar fontes e imagens
        await waitForFonts();
        await preloadImages(element);
        
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
            compress: true
        });
        
        // Dimensões A4 em mm
        const pdfWidth = 210;
        const pdfHeight = 297;
        
        // Processar cada página
        for (let i = 0; i < pages.length; i++) {
            const page = pages[i];
            
            // Adicionar nova página ao PDF (exceto a primeira)
            if (i > 0) {
                pdf.addPage();
            }
            
            // Criar um container temporário para captura limpa
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.top = '0';
            tempContainer.style.width = '210mm';
            tempContainer.style.background = 'white';
            document.body.appendChild(tempContainer);
            
            // Clonar a página
            const clonedPage = page.cloneNode(true);
            clonedPage.style.transform = 'none';
            clonedPage.style.margin = '0';
            clonedPage.style.boxShadow = 'none';
            clonedPage.style.borderRadius = '0';
            tempContainer.appendChild(clonedPage);
            
            // Aguardar renderização
            await new Promise(resolve => setTimeout(resolve, 100));
            
            // Capturar com html2canvas
            const canvas = await html2canvas(clonedPage, {
                scale: 3,
                useCORS: true,
                allowTaint: false,
                backgroundColor: '#ffffff',
                logging: false,
                width: clonedPage.scrollWidth,
                height: clonedPage.scrollHeight,
                windowWidth: clonedPage.scrollWidth,
                windowHeight: clonedPage.scrollHeight,
                imageTimeout: 0,
                removeContainer: false
            });
            
            // Remover container temporário
            document.body.removeChild(tempContainer);
            
            // Calcular dimensões mantendo proporção
            const imgWidth = pdfWidth;
            const imgHeight = (canvas.height * pdfWidth) / canvas.width;
            
            // Adicionar imagem ao PDF
            const imgData = canvas.toDataURL('image/jpeg', 0.98);
            pdf.addImage(
                imgData,
                'JPEG',
                0,
                0,
                imgWidth,
                Math.min(imgHeight, pdfHeight)
            );
        }
        
        return { pdf, filename };
    } catch (error) {
        console.error('Erro detalhado ao gerar PDF:', error);
        throw error;
    }
}

// Download PDF
async function downloadPDF() {
    const btn = document.getElementById('downloadBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Gerando...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    
    try {
        const { pdf, filename } = await generatePDF();
        pdf.save(filename);
        
        btn.innerHTML = '<i class="ph ph-check"></i> Baixado!';
        btn.style.opacity = '1';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 3000);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        alert('Erro ao gerar PDF: ' + error.message);
        btn.innerHTML = '<i class="ph ph-warning"></i> Erro';
        btn.style.opacity = '1';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 3000);
    }
}

// Compartilhar PDF
async function sharePDF() {
    const btn = document.getElementById('shareBtn');
    
    // Verificar se a API de compartilhamento está disponível
    if (!navigator.share && !navigator.canShare) {
        alert('Compartilhamento não suportado neste navegador. Use o botão de Download.');
        return;
    }
    
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Preparando...';
    btn.disabled = true;
    btn.style.opacity = '0.7';
    
    try {
        const { pdf, filename } = await generatePDF();
        const pdfBlob = pdf.output('blob');
        
        const file = new File([pdfBlob], filename, { type: 'application/pdf' });
        
        // Verificar se pode compartilhar arquivos
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
                files: [file],
                title: 'Proposta Comercial - Noble Shield Security',
                text: `Proposta comercial ${appState.documentNumber}`
            });
            
            btn.innerHTML = '<i class="ph ph-check"></i> Compartilhado!';
        } else {
            // Fallback: criar link de download temporário
            const url = URL.createObjectURL(pdfBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            btn.innerHTML = '<i class="ph ph-check"></i> Baixado!';
        }
        
        btn.style.opacity = '1';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 3000);
    } catch (error) {
        console.error('Erro ao compartilhar:', error);
        
        // Se o usuário cancelou o compartilhamento
        if (error.name === 'AbortError') {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.style.opacity = '1';
            return;
        }
        
        alert('Erro ao compartilhar: ' + error.message);
        btn.innerHTML = '<i class="ph ph-warning"></i> Erro';
        btn.style.opacity = '1';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 3000);
    }
}