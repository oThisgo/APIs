function validate() {
    conteudo = document.getElementById("Num").value
    if (isNaN( conteudo ) || conteudo < 1 || conteudo > 10){
        document.getElementById('info').innerHTML = "Valor não permitido"
        return false
    } else {
        return true
    }
}

function soma() {

    num1 = Number(document.getElementById("Num1").value)
    num2 = Number(document.getElementById("Num2").value)
    if (isNaN(num1) || isNaN(num2) || num1.isEmpty() || num2.isEmpty()) {
        document.getElementById('result').innerHTML = "Digite um valor válido"
    } else {
        document.getElementById('result').innerHTML = num1 + num2
    }
    
}