// ==========================================
// 1. SELEÇÃO DOS ELEMENTOS (HTML)
// ==========================================
const checkNoiva = document.getElementById('check-noiva');
const checkNoivo = document.getElementById('check-noivo');
const checkEnsaio = document.getElementById('check-ensaio');
const checkDrone = document.getElementById('check-drone');
const checkCerimonia = document.getElementById('check-cerimonia');

const listaGravacao = document.getElementById('gravacao');
const listaEntregas = document.getElementById('entregas');
const campoTotal = document.getElementById('valor-total');

// ==========================================
// 2. CONFIGURAÇÃO DE PREÇOS DOS OPCIONAIS
// ==========================================
const VALOR_BASE = 4000;

const PRECOS = {
  noiva: 450,
  noivo: 450,
  ensaio: 500,
  drone: 400,
  cerimonia: 450
};

// ==========================================
// 3. FUNÇÕES AUXILIARES
// ==========================================
function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function adicionarItem(lista, texto) {
  const item = document.createElement('li');
  item.textContent = texto;
  lista.appendChild(item);
}

// ==========================================
// 4. FUNÇÃO PRINCIPAL DE ATUALIZAÇÃO
// ==========================================
function atualizarOrcamento() {
  let valorAtualizado = VALOR_BASE;

  // Reseta e mantém os itens padrão de GRAVAÇÃO
  listaGravacao.innerHTML = `
    <li>Cerimônia de casamento</li>
    <li>Festa de recepção</li>
  `;

  // Reseta e mantém os itens padrão de ENTREGAS
  listaEntregas.innerHTML = `
    <li>1 vídeo com duração de até 1 minuto de todo o casamento.</li>
    <li>1 vídeo com duração de até 20 minutos da cerimônia</li>
    <li>1 vídeo com duração de até 10 minutos da recepção</li>
    <li>Todos os vídeos na resolução 4k</li>
  `;

  // Making of da noiva
  if (checkNoiva.checked) {
    valorAtualizado += PRECOS.noiva;
    adicionarItem(listaGravacao, 'Making of da noiva');
  }

  // Making of do noivo
  if (checkNoivo.checked) {
    valorAtualizado += PRECOS.noivo;
    adicionarItem(listaGravacao, 'Making of do noivo');
  }

  // Ensaio pré-wedding
  if (checkEnsaio.checked) {
    valorAtualizado += PRECOS.ensaio;
    adicionarItem(listaGravacao, 'Ensaio pré-wedding');
    adicionarItem(listaEntregas, '1 vídeo com duração de 1 minuto do ensaio pré-wedding');
  }

  // Captação de imagens com drone
  if (checkDrone.checked) {
    valorAtualizado += PRECOS.drone;
    adicionarItem(listaGravacao, 'Captação de imagens com drone');
  }

  // Cerimônia na íntegra
  if (checkCerimonia.checked) {
    valorAtualizado += PRECOS.cerimonia;
    adicionarItem(listaEntregas, 'Cerimônia na íntegra.');
  }

  // Atualiza o visor HTML com o resultado final formatado
  campoTotal.textContent = formatarMoeda(valorAtualizado);
}

// ==========================================
// 5. EVENTOS DE ESCUTA
// ==========================================
const checkboxes = [checkNoiva, checkNoivo, checkEnsaio, checkDrone, checkCerimonia];
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', atualizarOrcamento);
});

// Inicia calculando o valor base ao abrir a página
atualizarOrcamento();
