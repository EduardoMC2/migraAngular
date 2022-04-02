var modalButton = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-cerrar");

modalButton.addEventListener("click", function(){
    modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function(){
    modalBg.classList.remove("bg-active");
});