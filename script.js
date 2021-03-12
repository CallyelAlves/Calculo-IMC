const calcular = () => {
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");
    let alert = document.getElementById("alert");
    const imc = peso / (altura * altura);

    if (peso !== "" && altura !== "") {
        if(imc < 18.5){
            resultado.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}<br> CLASSIFICAÇÃO: Abaixo do peso</h3>`;
        }else if(imc < 24.9){
            resultado.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}<br> CLASSIFICAÇÃO: Peso ideal</h3>`;
        }else if(imc < 29.9){
            resultado.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}<br> CLASSIFICAÇÃO: Levemente acima do peso</h3>`;
        }else if(imc < 34.9){
            resultado.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}<br> CLASSIFICAÇÃO: Obesidade grau I</h3>`;
        }else if(imc < 39.9){
            resultado.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}<br> CLASSIFICAÇÃO: Obesidade grau II</h3>`; 
        }else{
            resultado.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}<br> CLASSIFICAÇÃO: Obesidade grau III</h3>`;
        }
    }else{
        alert.style.display = 'block';
        alert.innerHTML = `<h2>Preencha todos os campos!!!</h2>`;

        function funcalert(){
            alert.style.display = 'none';
        }
        setTimeout(funcalert, 3000);
    }
}