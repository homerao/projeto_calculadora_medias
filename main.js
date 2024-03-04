const form = document.getElementById('form-atividade');
let tbody = document.querySelector('tbody')
let notas = []
const imgAprovado = '<img src="images/aprovado.png" alt="">';
const imgReprovado = '<img src="images/reprovado.png" alt="">';
const spanAprovado = '<span id="spanAprovado" class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span id="spanAprovado" class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima da média"))
form.addEventListener( 'submit',function (e){
    e.preventDefault();

    let nomeatv = document.getElementById('nome-atividade');
    let notaatv = document.getElementById('nota-atividade');

/* 
    alert(`atividade: ${nomeatv.value} ${notaatv.value}`);
  let linha = `<tr>
               <td>${nomeatv.value}</td>
               <td>${notaatv.value}</td>
               <td>${notaatv.value >= 7 ? imgAprovado:imgReprovado} </td> 
               </tr>`
    tbody.innerHTML = linha        */    
  insertTable(nomeatv.value, notaatv.value)
  if(notas.length >= 2){
  calculaMedia();
  }
  nomeatv.value = ''
  notaatv.value = ''
});

function insertTable(nomeatv, notaatv){

  let table = document.getElementById('tb-calculadora');
  notas.push(parseFloat(notaatv))
  linha = table.insertRow(1)
  linha.insertCell(0).innerHTML = nomeatv;
  linha.insertCell(1).innerHTML = notaatv;
  linha.insertCell(2).innerHTML = notaatv >= notaMinima ? imgAprovado: imgReprovado;


}
function calculaMedia(){
  let table = document.getElementById('tb-calculadora');
  let tfooter = document.getElementById('tbfooter');
  let media = notas.reduce(function(accumulator,value){
    return accumulator + value
  },0)/ notas.length

tfooter = document.getElementById('tb-calculadora').createTFoot()
tfooter.remove()
tfooter = document.getElementById('tb-calculadora').createTFoot()
let row = tfooter.insertRow(0);
 //rows.innerHTML = 'Média Final'
 row.insertCell(0).innerHTML = 'Média Final'
 row.insertCell(1).innerHTML = media.toFixed(2) 
 row.insertCell(2).innerHTML = media >= 7 ? spanAprovado: spanReprovado;

}