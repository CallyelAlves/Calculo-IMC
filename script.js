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

    weight = getIds.weight.value
    height = getIds.height.value

    const imc = weight / (height * height) 

    const valueIMC = {
        underWeight: imc < 18.5,
        idealWeight: imc < 24.9,
        overWeight: imc < 29.9,
        obesityI: imc < 34.9,
        obesityII: imc < 39.9,
    }

    HTML = `<h3>SEU IMC: ${imc.toFixed(2)}</h3>`
    
    if (weight !== "" && height !== "") {

        if(valueIMC.underWeight){
            getIds.result.innerHTML = HTML + classificationIMC.underWeight

        }else if(valueIMC.idealWeight){
            getIds.result.innerHTML = HTML + classificationIMC.idealWeight

        }else if(valueIMC.overWeight){
            getIds.result.innerHTML = HTML + classificationIMC.overWeight

        }else if(valueIMC.obesityI){
            getIds.result.innerHTML = HTML + classificationIMC.obesityI

        }else if(valueIMC.obesityII){
            getIds.result.innerHTML = HTML + classificationIMC.obesityII
        }else{
            getIds.result.innerHTML = HTML + classificationIMC.obesityIII
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

