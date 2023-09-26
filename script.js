// Função para atualizar o relógio
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('relogio').textContent = timeString;
}

// Atualize o relógio a cada segundo
setInterval(updateClock, 1000);

// Chame a função uma vez para exibir o relógio imediatamente
updateClock();