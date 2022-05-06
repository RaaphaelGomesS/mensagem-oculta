var codifica = document.getElementById('codificar')
var decodifica = document.getElementById('decodificar')
var incrementar = document.getElementById('incremento')
var selecao = document.querySelector(".seletor")
var responder = document.getElementById('resposta')
var cifra = document.getElementById('cifra')
var base = document.getElementById('base64')
var div = document.getElementById('botao')
var botao = document.createElement('button')

//cria o input de incremento 

selecao.addEventListener("change",function(event){
    event.preventDefault();

    if (event.target.value == "cifra"){
        incrementar.innerHTML = '<input id="incrementado" type="number"></input>'
    }
    else{
        incrementar.innerHTML =""
    }
})

//cria os botoes codificar e decodificar

codifica.addEventListener('click',function(){

    botao.innerText = 'Codificar';

    div.append(botao)
})

decodifica.addEventListener('click',function(){

    botao.innerText = 'Decodificar';

    div.append(botao)
})

