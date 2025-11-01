const button = document.getElementById('hackButton');

// Evento de clique no botão
button.addEventListener('click', function() {
    hackSequence();
});

function hackSequence() {
    const subtitle = document.getElementById('subtitle');
    
    subtitle.innerHTML = "Iniciando hack...";
    
    setTimeout(() => {
        subtitle.innerHTML = "Bypassando Firewall...";
    }, 1000);
    
    setTimeout(() => {
        subtitle.innerHTML = "Explorando vulnerabilidades...";
    }, 3000);
    
    setTimeout(() => {
        subtitle.innerHTML = "Injetando Payload...";
    }, 5000);
    
    setTimeout(() => {
        subtitle.innerHTML = "Hack Completo! Acesso Concedido!";
    }, 7000);
}
