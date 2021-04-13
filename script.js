const getIds = {
    height: document.getElementById("height"),
    weight: document.getElementById("weight"),
    result: document.getElementById("result"),
    alert: document.getElementById("alert")
}

const classificationIMC = {

    underWeight: `<h3> CLASSIFICAÇÃO: Abaixo do peso</h3>`,
    idealWeight: `<h3> CLASSIFICAÇÃO: Peso ideal</h3>`,
    overWeight: `<h3> CLASSIFICAÇÃO: Levemente acima do peso</h3>`,
    obesityI: `<h3> CLASSIFICAÇÃO: Obesidade grau I</h3>`,
    obesityII: `<h3> CLASSIFICAÇÃO: Obesidade grau II</h3>`,
    obesityIII: `<h3> CLASSIFICAÇÃO: Obesidade grau III</h3>`,

}


const calc = () => {


    const imc = getIds.weight.value / (getIds.height.value * getIds.height.value) 


    if (getIds.weight !== "" && getIds.height !== "") {
        if(imc < 18.5){
            getIds.result.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>` + classificationIMC.underWeight
        }else if(imc < 24.9){
            getIds.result.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>` + classificationIMC.idealWeight
        }else if(imc < 29.9){
            getIds.result.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>` + classificationIMC.overWeight
        }else if(imc < 34.9){
            getIds.result.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>` + classificationIMC.obesityI
        }else if(imc < 39.9){
            getIds.result.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>` + classificationIMC.obesityII
        }else{
            getIds.result.innerHTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>` + classificationIMC.obesityIII
        }
    }else{
        getIds.alert.style.display = 'block';
        getIds.alert.innerHTML = `<h2>Preencha todos os campos!!!</h2>`;

        function funcalert(){
            getIds.alert.style.display = 'none';
        }
        setTimeout(funcalert, 3000);
    }
}

