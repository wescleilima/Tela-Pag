
function efetuarPagamento() {
    const academias = document.getElementById('academias').checked;
    const personalTrainers = document.getElementById('personal-trainers').checked;
    const consultaSaude = document.getElementById('consulta-saude').checked;

    let servicosSelecionados = [];

    if (academias) servicosSelecionados.push('Academias');
    if (personalTrainers) servicosSelecionados.push('Personal Trainers');
    if (consultaSaude) servicosSelecionados.push('Consulta de Saúde');

    if (servicosSelecionados.length > 0) {
        alert(`Você selecionou: ${servicosSelecionados.join(', ')}. Pronto para pagamento!`);
    } else {
        alert('Por favor, selecione pelo menos um serviço para efetuar o pagamento.');
    }
}
