// concatenando os numeros ao lado do outro
function insert(num) {
    let numero = document.getElementById('resultado-final').innerHTML;
    document.getElementById('resultado-final').innerHTML = numero + num;
}
//apaga um número de cada vez
function clean(){
    document.getElementById('resultado-final').innerHTML = "";    
}
//essa função back do botão (AC) apaga tudo 
function back(){
    let resultado = document.getElementById('resultado-final').innerHTML;
    document.getElementById('resultado-final').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    let resultado = document.getElementById('resultado-final').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado-final').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado-final').innerHTML = "Sem calc";
    }
}

// function porcentage(percent){
//      document.getElementById('resultado-final').innerHTML;
//       return ((percent/ 100) * total).toFixed(2);   
// }
