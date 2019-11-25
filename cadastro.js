function Enviar() {
    var nomeCao = document.getElementById("nome");
    var idadeCao = document.getElementById("idade");
    var tamanho = tamSelecionado();
    var sexo = sexoSelecionado();

    var extraCao = document.getElementById("extra");

    var nomeDoador = document.getElementById("nomeDoador");
    var emailDoador = document.getElementById("emailDoador");
    var telefoneDoador = document.getElementById("telefoneDoador");

    var castrado = document.getElementById("castrado").checked;
    var vacinado = document.getElementById("vacinado").checked;
    var vermifugado = document.getElementById("vermifugado").checked;
    var especiais = document.getElementById("especiais").checked;

    alert('Cão cadastrado com sucesso!');
};

function tamSelecionado() {
    pqno = document.getElementById("pequeno");
    medio = document.getElementById("medio");
    grand = document.getElementById("grande");

    if(pqno.checked) {return pqno.value};
    if(medio.checked) {return medio.value};
    if(grand.checked) {return grand.value};
};

function sexoSelecionado() {
    macho = document.getElementById("macho");
    femea = document.getElementById("femea");
    outros = document.getElementById("outros");

    if(macho.checked) {return macho.value};
    if(femea.checked) {return femea.value};
    if(outros.checked) {return outros.value};
};