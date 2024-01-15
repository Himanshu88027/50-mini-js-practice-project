const panels = document.querySelectorAll('.panel');

panels.forEach(panelsClass => {
    panelsClass.addEventListener("click", function (){
        removeActiveClass()
        panelsClass.classList.add('active')
    })
});

function removeActiveClass() {
    panels.forEach(panelsClass => {
        panelsClass.classList.remove('active')
    })
}