function mudaimagem(selectElement) {
    const selectedValue = selectElement.value;
    const imgElement = document.getElementById("imagem");
    
    

    if (selectedValue === "in1") {
        imgElement.src = './img/Cotton.jpeg';
    } else if (selectedValue === "in2") {
        imgElement.src = "./img/Snowdrop.jpeg";
    } else if (selectedValue === "in3") {
        imgElement.src = "./img/Tea.jpeg";
    } 
}

function calculadora() {
    let quantin = Number(document.getElementById("quantidade").value); 
    const selectedValue = document.getElementById("planta").value;

    let lucro;
    if (selectedValue === "in1") {
        const in1 = 105;
        lucro = in1 * quantin;
    } else if (selectedValue === "in2") {
        const in2 = 125;
        lucro = in2 * quantin;
    } else if (selectedValue === "in3") {
        const in3 = 68;
        lucro = in3 * quantin;
    }


    document.getElementById("resultado").innerText = `O lucro ao vender a plantação: ${lucro.toFixed(2)}`;
}