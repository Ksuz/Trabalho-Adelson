function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2);
}