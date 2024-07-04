
/*SE IMPLEMENTO UNA VENTANA DE PROMOCIONES EN LA SECCION DE MENU*/
function openPopup() {
    document.getElementById("promo").style.display = "block";
}
function closePopup() {
    document.getElementById("promo").style.display = "none";
}
window.onload = function() {
    setTimeout(openPopup, 2000);
};