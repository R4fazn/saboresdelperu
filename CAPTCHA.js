
/*SE AGREGA UN CAPTCHA DE VERIFICACION EN LA SECCION DE RESERVA Y CONTACTO*/
function generateCaptcha() {
    const charsArray = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 5;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    return captcha.join('');
}
function renderCaptcha() {
    const captcha = generateCaptcha();
    document.getElementById("captcha").innerHTML = `
        <label for="captcha">Captcha ${captcha}</label>
        <input type="text" id="captcha-input" placeholder="Ingresa el captcha" required>
        <input type="hidden" id="captcha-code" value="${captcha}">
    `;
}
function validateForm() {
    const userInput = document.getElementById("captcha-input").value;
    const captchaCode = document.getElementById("captcha-code").value;
    if (userInput === captchaCode) {
        alert("Verificación exitosa");
        document.getElementById("contact-form").submit();
    } else {
        alert("Captcha incorrecto. Inténtalo de nuevo.");
        renderCaptcha();
    }
}
window.onload = function() {
    renderCaptcha();
};
