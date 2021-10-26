function insert(numero){
    var num = document.querySelector('#resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + numero

}

function clean(){
    document.getElementById('resultado').innerHTML = ''
}

function elevar(){
    var res = document.getElementById('resultado').innerHTML;
    resul = res * res
    document.getElementById('resultado').innerHTML = resul
}

function calcular(){
    var res = document.getElementById('resultado').innerHTML;
    if (res){
        document.getElementById('resultado').innerHTML = eval(res)
    }
}