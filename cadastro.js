function Enviar() {
    var nomeCao = document.getElementById("nome");
    var idadeCao = document.getElementById("idade");
    var extraCao = document.getElementById("extra");
    var nomeDoador = document.getElementById("nomeDoador");
    var emailDoador = document.getElementById("emailDoador");
    var telefoneDoador = document.getElementById("telefoneDoador");
    var vermifugado = document.getElementById("vermifugado");

    alert('Obrigado sr(a) ' + vermifugado.value + ' os seus dados foram encaminhados com sucesso');
}