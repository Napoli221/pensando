function mudaimagem(selectElement) {
    const selectedValue = selectElement.value;
    const imgElement = document.getElementById("imagem");
    
    

    if (selectedValue === "ve1") {
        imgElement.src = './img/Gardenia.png';
    } else if (selectedValue === "ve2") {
        imgElement.src = "./img/Iris.png";
    } else if (selectedValue === "ve3") {
        imgElement.src = "./img/Lily.png";
    } else if (selectedValue === "ve4") {
        imgElement.src = './img/Melon.png';
    } else if (selectedValue === "ve5") {
        imgElement.src = './img/Pineapple.png';
    } else if (selectedValue === "ve6") {
        imgElement.src = './img/Radish.png';
    } else if (selectedValue === "ve7") {
        imgElement.src = './img/Red.png';
    } else if (selectedValue === "ve8") {
        imgElement.src = './img/Rose.png';
    } else if (selectedValue === "ve9") {
        imgElement.src = './img/StarFruit.png';
    } else if (selectedValue === "ve10") {
        imgElement.src = './img/Sunflower.png';
    } else if (selectedValue === "ve11") {
        imgElement.src = './img/Wheat.png';
    }
}

function calculadora() {
    let quantin = Number(document.getElementById("quantidade").value); 
    const selectedValue = document.getElementById("planta").value;

    let lucro;
    if (selectedValue === "ve1") {
        const ve1 = 45;
        lucro = ve1 * quantin;
    } else if (selectedValue === "ve2") {
        const ve2 = 102;
        lucro = ve2 * quantin;
    } else if (selectedValue === "ve3") {
        const ve3 = 149;
        lucro = ve3 * quantin;
    } else if (selectedValue === "ve4") {
        const ve4 = 233;
        lucro = ve4 * quantin;
    } else if (selectedValue === "ve5") {
        const ve5 = 201;
        lucro = ve5 * quantin;
    } else if (selectedValue === "ve6") {
        const ve6 = 119;
        lucro = ve6 * quantin;
    } else if (selectedValue === "ve7") {
        const ve7 = 106;
        lucro = ve7 * quantin;
    } else if (selectedValue === "ve8") {
        const ve8 = 51;
        lucro = ve8 * quantin;
    } else if (selectedValue === "ve9") {
        const ve9 = 108;
        lucro = ve9 * quantin;
    } else if (selectedValue === "ve10") {
        const ve10 = 70;
        lucro = ve10 * quantin;
    } else if (selectedValue === "ve11") {
        const ve11 = 33;
        lucro = ve11 * quantin;
    }


    document.getElementById("resultado").innerText = `O lucro ao vender a colheita é de: ${lucro} ouros!`;
}