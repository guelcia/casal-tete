document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);

    // 1. CAPTURA DO NOME DO CONVIDADO NA URL
    const urlParams = new URLSearchParams(window.location.search);
    let nomeConvidado = urlParams.get('nome') || "Convidado Especial";

    // Injetar o nome no painel
    $("nomeConvidadoTela").textContent = nomeConvidado;

    // 2. CONTROLO DAS OPÇÕES DE PRESENÇA
    const radioSim = $("radioSim");
    const radioNao = $("radioNao");

    // 3. ENVIO DOS DADOS DIRETO PARA O WHATSAPP
    // INSIRA AQUI O SEU NÚMERO (Ex: 258843000000)
    const whatsappDono = "258873144454";

    const whatsappLink = $("whatsappLink");

    whatsappLink.addEventListener("click", (e) => {
        // Verifica se a opção foi escolhida
        if (!radioSim.checked && !radioNao.checked) {
            e.preventDefault();
            alert("Por favor, seleciona se vais comparecer ou não antes de enviar!");
            return;
        }

        // Prepara a mensagem
        let presencaStatus = radioSim.checked ? "Confirmado" : "Ausente";
        
        let mensagem = `Olá Suzalino & Ivete!\n\nEstou a responder ao convite de casamento de vocês.\n\nStatus: ${presencaStatus}\nConvidado: ${nomeConvidado}`;

        if (presencaStatus === "Ausente") {
            mensagem += `\n\nInfelizmente não poderei comparecer.`;
        }

        // Constrói o link e ATUALIZA o href do botão
        const urlFinal = `https://wa.me/${whatsappDono}?text=${encodeURIComponent(mensagem)}`;
        
        whatsappLink.href = urlFinal;
    });
});