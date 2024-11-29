let isFugindo = false;

document.getElementById('aceitar').addEventListener('click', function() {
    // Para a animação do botão "Não"
    isFugindo = false;

    // Para a animação
    clearInterval(fugirInterval);

    document.getElementById('pedido').style.display = 'none';
    document.getElementById('resposta').style.display = 'block';
    document.getElementById('mensagem-resposta').innerText = 'Sim! Eu aceito! 💍❤️';
});

const botaoRecusar = document.getElementById('recusar');

botaoRecusar.addEventListener('click', function() {
    // Inicia a animação do botão "Não"
    isFugindo = true;

    // Animação do botão "Não"
    const fugirInterval = setInterval(() => {
        if (isFugindo) {
            const x = Math.random() * (window.innerWidth - botaoRecusar.offsetWidth);
            const y = Math.random() * (window.innerHeight - botaoRecusar.offsetHeight);
            botaoRecusar.style.position = 'absolute';
            botaoRecusar.style.left = `${x}px`;
            botaoRecusar.style.top = `${y}px`;
        }
    }, 500); // Muda a posição a cada meio segundo

});

// Para garantir que a animação pare se a página for recarregada
window.addEventListener('beforeunload', function() {
   clearInterval(fugirInterval);
});
