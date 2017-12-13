//Declarar Variaveis
const nota = document.querySelector('#nota');
const ch = document.querySelector('#ch');
const add = document.querySelector('#add');
const calc = document.querySelector('#calc');
const cr = document.querySelector('.cr');

//definir Vetores
let listaNota = [];
let listaCarga = [];

//Iniciar EventListeners
eventListeners();

//Eventlisteners Function
function eventListeners(){
  //Adicionar
  add.addEventListener('click', addToArrays);
  //Calcular
  calc.addEventListener('click', calcularCR);
}

//AddToArray Function
function addToArrays(){
  let score = nota.value;
  let carga = ch.value;
  if(score === '' || carga === ''){
    console.log('Nenhuma informação adicionada');
  }else{
    listaNota.push(score);
    listaCarga.push(carga);
    score = '';
    carga = '';
    console.log(`Carga horaria: ${listaCarga} || Nota: ${listaNota}`);
  }
};

//CalcularCR function
function calcularCR(){
  let crNota = 0;
  for(let i = 0; i < listaCarga.length; i++){
    let calculo = (listaCarga[i]* listaNota[i])/listaCarga[i];
    crNota = crNota + calculo;
  }
  notaFinal = crNota/listaCarga.length;
  cr.innerHTML = notaFinal.toFixed(1);
}