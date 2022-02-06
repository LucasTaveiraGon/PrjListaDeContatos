/*
Lista de ctts
firts step 
input de dados, caapturar dados, inserção na tela e remoção

*/



const contactlist = [];
let id = 0;

const listaContainer = document.querySelector('.list')

const campoNome = document.getElementById('cName');
const campoEmail = document.getElementById('cEmail');
const campoTel = document.getElementById('cTel');

const btnAdd = document.getElementById('botaoAdd')

function addNewC(){
    const Vname = campoNome.value;
    const Vemail = campoEmail.value;
    const Vtel = campoTel.value;
    
    const newContact = {
        id: id,
        nome: Vname,
        email: Vemail,
        telefone: Vtel 

    };

    id++
    contactlist.push(newContact);
    renderLay();
}
btnAdd.addEventListener('click',addNewC);

function removerContato(evento) {
    const botaoClicado = evento.target;
    const contatoClicado = botaoClicado.parentElement;
    const idContatoClicado = contatoClicado.dataset.id;

    const contatoRemovido = listaContatosLocal.find((contato) => contato.id == idContatoClicado);
    const posicaoContatoRemovido = listaContatosLocal.indexOf(contatoRemovido);
    listaContatosLocal.splice(posicaoContatoRemovido, 1);

    renderizarLayout();
}

function rendeLay(){
    listaContainer.innerHTML = '';
    if(contactlist.length !== 0){
        for(let i = 0; i < contactlist.length; i++){
        criarLayout(contactlist[i]);
        }
    }else{
        const listavazia = `<li>
        <p> Não há contatps na lista </p>
        </li>`;
    }

}
function criarLayout(newContact){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const span = document.createElement('span');
    button.id = "remove";

    h2.innerText = contactlist.nome;
    p.innerText = contactlist.emaill;
    span.innerText = contactlist.telefone;

    li.appendChild(button);
    li.appendChild(h2);
    li.appendChild(p);
    li.appendChild(span);

    listaContainer.appendChild(li);

}

