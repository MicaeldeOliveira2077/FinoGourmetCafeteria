function msg(){
    alert("Sr(a) " + document.faleconosco.nome.value + ", seus dados foram enviados com sucesso.");
}

function acesso(){
    if (document.restrito.cpf.value=="024" && document.restrito.senha.value=="123"){
        alert("Seja bem vindo ao Sistema Administrativo");
    }
    else{
        alert("Sr(a) verifique as suas credenciais, caso seja o primeiro acesso, clicar sobre o botão Cadastrar");
    }
    document.restrito.cpf.value="";
    document.restrito.senha.value="";
}

function mascara_tel(objeto){
    if(objeto.value.legth == 0){
        objeto.value = objeto.value + '(';
    }

    if(objeto.value.legth == 3){
        objeto.value = objeto.value + ')';
    }

    if(objeto.value.legth == 9){
        objeto.value = objeto.value + '-';
    }
}