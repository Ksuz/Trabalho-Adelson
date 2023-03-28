function calcular() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Magreza");
    }
    if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Normal");
    }
    if (imc >= 25 && imc <= 29.9) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Sobrepeso");
    }
    if (imc >= 30.0 && imc <= 39.9) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Obesidade");
    }
    if (imc > 40) {
        document.getElementById("resultado").textContent = "Seu IMC é: " + imc.toFixed(2) + (" Classificação: Obesidade grave");
    }
    
    
    
    
    
    
}