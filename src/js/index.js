     /* 
    Objetivo 1- quando  o usuário  clicar no botão de seleção de plataformas deve abrir uma caixa com botões de seleção de plataforma
        Passo 1 - pegar o botão de seleção de plataforma no JS
        
        Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

        Passo 3 - pegar o click do usuario no js

        Passo 4 -  quando o usuário clicar , adicionar a classe ativo  na listagem do plataformas dentro do botão para que o conteúdo apareça


    Objetivo 2- caso a lista de botões  de plataforma já esteja aparecendo e o usuário  clicar em cima do botão, o conteúdo deve  ser escondido

        Passo 1 - verificar se o botão ja está aberto, se sim, devemos remover a classe ativo pra que ele esconda o contéudo novamente
    */

const botao = document.querySelector(".btn-plataforma"); 

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas")

botao.addEventListener("click",() => {
    elementoPlataformas.classList.toggle("ativo");
});
