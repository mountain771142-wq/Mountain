const setUp = () => {
    let part1 = document.querySelector("#part1");
    let part2 = document.querySelector("#part2");
    let color = document.querySelector("#color").value;
    let color_placeholder = document.querySelector("#animated");
    let qrText = document.querySelector("#qrText").value;
    let bgcolor = ["blue-pic.png", "orange-pic.png", "green-pic.jpeg", "grey-pic.jpeg", "pink-pic.png"];
    let first4 = color.substring(0, 4);
    
    for (let i = 0; i < bgcolor.length; i++) {
        let bg4 = bgcolor[i].substring(0, 4);
        if(first4.toLowerCase() == bg4.toLowerCase()){
            color_placeholder.style.backgroundImage = `url('img/${bgcolor[i]}')`;
            break;
        }
    }
    
    part1.style.display = "none";
    part2.style.display = "block";

    generateQR(qrText);
};

function generateQR(text) {
    const qrContainer = document.getElementById('qrContainer');
    qrContainer.innerHTML = '';
    if (text.trim() === '') {
        qrContainer.innerHTML = '<p style="color:black; text-align:center;">أدخل نصاً للـ QR</p>';
        return;
    }
    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
