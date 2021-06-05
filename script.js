function calcular(){
    var visor = document.getElementById("tela1").innerHTML;
    if(visor) {
        document.getElementById("tela2").innerHTML = eval(visor);
    } 
}

function insert(num) {
    var numero = document.getElementById('tela1').innerHTML;
    document.getElementById('tela1').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('tela1').innerHTML = "";
    document.getElementById('tela2').innerHTML = "";

}

function info(){
    alert("Calculadora modelo - Disciplina de Web - ADS UNIVALI 2021")
}