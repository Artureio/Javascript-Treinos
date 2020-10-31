
//---criando elementos 
    //passo1:criando elemento
var novoLi = document.createElement('li');
var negrito = document.createElement('strong');
    //passo2: criando nó de texto
var novoTexto = document.createTextNode('TextNode');
    //passo3: inserindo o node dentro dos elementos
negrito.appendChild(novoTexto);
novoLi.appendChild(negrito); 
    //repetindo passo 2
var posicao0 = document.getElementsByTagName('ul')[1]//o [1] representa a posição em array da ul;
    //repetindo passo 3
posicao0.appendChild(novoLi); 
//removendo elementos
    //passo 1:obtenha o elemento que deseja remover
var remover = document.getElementsByTagName('li')[0];
    //passo 2: armazene o node pai dentro de uma variável
var pai = remover.parentNode;
    //passo 3: remova o node filho
pai.removeChild(remover);

//---Nós de Atributo
    //---verificando se tem uma classe, caso tenha, adiciona conteudo.
var elemento = document.getElementById('nos');
if(elemento.hasAttribute('class')){
    elemento.innerHTML = 'elemento.<b>innerHTML</b>'
}   
// ---- // --- // ---

//adicionar itens ao inicio e ao fim da lista \/
var lista = document.getElementsByTagName('ul').item(2);
        //adicionando ao fim da lista
var newUltimoItem = document.createElement('li');//criando elemento
var newUltimoTexto = document.createTextNode('adicionado no final da lista');//criando nó de texto
newUltimoItem.appendChild(newUltimoTexto);//addicionando o nó de texto ao elemento 'li'
lista.appendChild(newUltimoItem);//adicionando o elemento 'li' dentro da lista

        //adicionando ao começo da lista
var newPrimeiroItem = document.createElement('li');
var newPrimeiroTexto = document.createTextNode('Adicionado ao início da lista');
newPrimeiroItem.appendChild(newPrimeiroTexto);
lista.insertBefore(newPrimeiroItem,lista.firstChild);//adiciona antes do primeiro filho
//------------//--------------//---------

//Adicionando a classe lista3 a todos os li com classe lista2
var listarItens = document.querySelectorAll('li.lista2');//selecionando todos <li class="lista2">
var i;
for(i = 0; i < listarItens.length; i++){
    listarItens[i].className = 'lista3';//atribuindo a classe aos itens
}
    //exibindo a quantidade de elementos li
var cabecalho = document.querySelector('h5#qtd');
var cabecalhoTexto = cabecalho.firstChild.nodeValue;
var totalItems = listarItens.length;
var novoCabecalho = cabecalhoTexto +  totalItems ;
cabecalho.textContent = novoCabecalho;

//EVENTOS
    //checando numero de caracteres
function checarUsuario(){
    var msg = document.getElementById('feedback');
    if (this.value.length < 5 && this.value.length !=0){//verifica se o elemento em que a funcao foi aplicada, atende aos requisitos 
        msg.textContent = 'precisa ter 5 letras!';
    }else{
        msg.textContent = '';
    }
}
var user = document.getElementById('username');
var senha = document.getElementById('password');
user.onblur = checarUsuario;
password.onblur = checarUsuario;
