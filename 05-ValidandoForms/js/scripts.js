//alert("Alerta com ação de click!")
frmExemplo.inNome.focus()

const validarDados = () => {
let nome = frmExemplo.inNome.value;
let idade = frmExemplo.inIdade.value;

if(nome.trim() == ""){
    alert("Ocampo nome não pode estar vazio!");
    frmExemplo.inNome.focus();
    return false;
}

if(idade.trim() == ""){
    alert("O campo idade não pode estar vazio!");
    frmExemplo.inIdade.focus();
    return false;
 }

 if(nome.trim() != "" && idade.trim() != "" && idade > 0){
    alert("Formuláio enviado!");
    location.reload();
 }
};