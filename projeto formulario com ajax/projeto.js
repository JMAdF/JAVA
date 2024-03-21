//alert com atraso de 5 segundos
window.onload = function() {
    setTimeout(function() {
        alert("Bem-vindo, aproveite sua navegação");
    }, 5000);
};

//carregamento de noticias
function carregar() {
    var url = 'https://news.google.com/rss?hl=pt-PT&gl=PT&ceid=PT:pt-150';
    $.ajax({
        url:"https://api.rss2json.com/v1/api.json?rss_url=" + url,
        type: 'GET',
        success: function (data) {
            objeto_json = eval(data);
            // ler o conteúdo
            var frase = "";
            for (i = 0; i < objeto_json.items.length; i++) {
                frase = frase + "Título: <b>" + objeto_json.items[i].title + "</b><br/>";
                frase = frase + objeto_json.items[i].description + "<br/>";
            }
            $("#caixa").html(frase);
        },
        error: function (xhr, status) {
            alert('Ocorreu um erro.');
        }
    });
};

//orçamento
function calcularorcamento(){
    let orcamentoTotal = 0;
    let precoTipopagina = 0;
    precoTipopagina = +document.getElementById('tipopagina').value;
    document.getElementById('valor-tipopagina').value = precoTipopagina ;

    const form = document.getElementById("checkboxGroup");
    let contar = 0;
    let somaPaginas = 0;
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.type === "checkbox" && element.checked) {
            contar++;
            somaPaginas += parseInt(element.value);
        }
    }

    const prazo = +document.getElementById('prazo').value;
    let desconto = 1;
    if (prazo > 0){
        switch (prazo){
            case 1:
                desconto *=0.95;
                break;
            case 2:
                desconto *= 0.9;
                break;
            case 3:
                desconto *= 0.85;
                break;
            default:
                desconto*= 0.8;
                break;
        }
    }

    const result = document.getElementById("resultado");
    orcamentoTotal = (precoTipopagina + somaPaginas) * desconto;
    result.innerHTML = `Número de páginas selecionadas: ${contar}. Valor total do orçamento: ${orcamentoTotal}.`;
};



//contactos
function validarContato() {
    //telemovel
    var telemovel = document.formulario.telemovel.value;
    if (isNaN(telemovel)) {
        alert("O número inserido não está correto.");
        return false;
    }
    //validar 9 algarismos
    if (telemovel.length !== 9) {
        alert("O número de telemóvel deve conter 9 dígitos.");
        return false;
    }
    if (!telemovel.startsWith("9")) {
        alert("O número de telemóvel deve começar com 9.");
        return false;
    }
    //idade
    var idade = document.formulario.idade.value;
    //validar se a idade é um valor numérico
    if (isNaN(idade)) {
        alert("A idade não é um número.");
        return false;
    }
    //validar idade menor que 18
    if (idade < 18) {
        alert("O preenchimento deste formulário requer que você tenha mais de 18 anos.");
        return false;
    }
    //email
    var email = document.formulario.email.value;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.toLowerCase())) {
        alert("Email inválido");
        return false;
    }
    alert("Obrigado pelo preenchimento do formulário. Todos os campos foram preenchidos corretamente.");
    return true;
};

