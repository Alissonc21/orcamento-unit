// ==========================================
// 1. SELEÇÃO DOS ELEMENTOS (HTML)
// ==========================================
const checkNoiva = document.getElementById('check-noiva');
const checkNoivo = document.getElementById('check-noivo');
const checkEnsaio = document.getElementById('check-ensaio');
const checkFilme2m = document.getElementById('check-filme2m');
const checkDrone = document.getElementById('check-drone');
const checkCerimonia = document.getElementById('check-cerimonia');
const checkHoraExtra = document.getElementById('check-horaExtra');
const check4k = document.getElementById('check-4k');
const checkSde = document.getElementById('check-sde');

// Listas e campo de valor total
const listaGravacao = document.getElementById('gravacao');
const listaEntregas = document.getElementById('entregas');
const campoTotal = document.getElementById('valor-total');

// ==========================================
// 2. CONFIGURAÇÃO DE PREÇOS DOS OPCIONAIS
// ==========================================
const PRECOS = {
    noiva: 450,
    noivo: 450,
    ensaio: 500,
    filme2m: 400,     // Altere para o preço real do vídeo de 2.5 min
    drone: 400,       // Altere para o preço real da captação com drone
    cerimonia: 450,   // Altere para o preço real da cerimônia na íntegra
    horaExtra: 300,   // Altere para o preço real da hora extra
    quatroKa: 500,    // Altere para o preço real da entrega em 4K
    sde: 1000         // Altere para o preço real do Same Day Edit
};

// Função auxiliar para formatar os números em Real (R\$)
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// ==========================================
// 3. FUNÇÃO PRINCIPAL DE ATUALIZAÇÃO
// ==========================================
function atualizarOrcamento() {
    // O valor base do pacote ESSENTIAL começa fixo em 5000
    let valorAtualizado = 5000; 
    
    // Reseta e mantém os itens padrão de GRAVAÇÃO
    listaGravacao.innerHTML = `
        <li>Cerimônia de casamento</li>
        <li>Festa de recepção</li>
    `;

    // Reseta e mantém os itens padrão de ENTREGAS
    listaEntregas.innerHTML = `
        <li>1 vídeo com duração de até 1 minuto de todo o casamento.</li>
        <li>1 vídeo com duração de até 30 minutos de todo o casamento</li>
    `;

    // --- EXECUÇÃO DAS REGRAS LOGICAS DE SOMA E INSERÇÃO ---

    // Making of da noiva (Adiciona em GRAVAÇÃO)
    if (checkNoiva.checked) {
        valorAtualizado += PRECOS.noiva;
        const item = document.createElement('li');
        item.textContent = 'Making of da noiva';
        listaGravacao.appendChild(item);
    }

    // Making of do noivo (Adiciona em GRAVAÇÃO)
    if (checkNoivo.checked) {
        valorAtualizado += PRECOS.noivo;
        const item = document.createElement('li');
        item.textContent = 'Making of do noivo';
        listaGravacao.appendChild(item);
    }

    // Ensaio pré-wedding (Adiciona em GRAVAÇÃO e ENTREGAS)
    if (checkEnsaio.checked) {
        valorAtualizado += PRECOS.ensaio;
        
        const itemGravacao = document.createElement('li');
        itemGravacao.textContent = 'Ensaio pré-wedding';
        listaGravacao.appendChild(itemGravacao);

        const itemEntrega = document.createElement('li');
        itemEntrega.textContent = '1 vídeo com duração de 1 minuto do ensaio pré-wedding';
        listaEntregas.appendChild(itemEntrega);
    }

    // Vídeo de até 2,5 min (Adiciona apenas em ENTREGAS)
    if (checkFilme2m.checked) {
        valorAtualizado += PRECOS.filme2m;
        const item = document.createElement('li');
        item.textContent = '1 vídeo com duração de até 2,5 minutos de todo o casamento';
        listaEntregas.appendChild(item);
    }

    // Captação de imagens com drone (Adiciona apenas em GRAVAÇÃO)
    if (checkDrone.checked) {
        valorAtualizado += PRECOS.drone;
        const item = document.createElement('li');
        item.textContent = 'Captação de imagens com drone';
        listaGravacao.appendChild(item);
    }

    // Cerimônia na íntegra (Adiciona apenas em ENTREGAS)
    if (checkCerimonia.checked) {
        valorAtualizado += PRECOS.cerimonia;
        const item = document.createElement('li');
        item.textContent = 'Cerimônia na íntegra.';
        listaEntregas.appendChild(item);
    }

    // +1 hora extra (Adiciona apenas em ENTREGAS)
    if (checkHoraExtra.checked) {
        valorAtualizado += PRECOS.horaExtra;
        const item = document.createElement('li');
        item.textContent = '+ 1 hora extra';
        listaGravacao.appendChild(item);
    }

    // Resolução 4K (Adiciona apenas em ENTREGAS)
    if (check4k.checked) {
        valorAtualizado += PRECOS.quatroKa;
        const item = document.createElement('li');
        item.textContent = 'Todos os seus filmes em resolução 4k.';
        listaEntregas.appendChild(item);
    }

    // Same Day Edit (Adiciona apenas em ENTREGAS)
    if (checkSde.checked) {
        valorAtualizado += PRECOS.sde;
        const item = document.createElement('li');
        item.textContent = 'Same Day Edit';
        listaEntregas.appendChild(item);
    }

    // Atualiza o visor HTML com o resultado final formatado
    campoTotal.textContent = formatarMoeda(valorAtualizado);
}

// ==========================================
// 4. EVENTOS DE ESCUTA (ADICIONANDO OS CLIQUES)
// ==========================================
checkNoiva.addEventListener('change', atualizarOrcamento);
checkNoivo.addEventListener('change', atualizarOrcamento);
checkEnsaio.addEventListener('change', atualizarOrcamento);
checkFilme2m.addEventListener('change', atualizarOrcamento);
checkDrone.addEventListener('change', atualizarOrcamento);
checkCerimonia.addEventListener('change', atualizarOrcamento);
checkHoraExtra.addEventListener('change', atualizarOrcamento);
check4k.addEventListener('change', atualizarOrcamento);
checkSde.addEventListener('change', atualizarOrcamento);

// Inicia calculando automaticamente os R\$ 4.000,00 originais ao abrir a tela
atualizarOrcamento();
