let botao = document.getElementById("btnBuscar")
botao.addEventListener("click" , buscar)

function buscar(){
    let produtos = ["Arroz","Feijao","Macarrão", "Leite","Açúcar"];
    let nome = document.getElementById("nome").value;
    let encontrado = false;

    for( let i = 0; i < produtos.length; i++){
        if(nome == produtos[i]){
            encontrado = true;
        }
    }

    if(encontrado == true){
        document.getElementById("resultado").innerHTML = "Produto Encontrado";

    }
    else{
        document.getElementById("resultado").innerHTML = "Produto não encontrado"
    }
}