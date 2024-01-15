const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentValue = 1;

next.addEventListener("click", function (){
    currentValue++

    if(currentValue > circles.length){
        currentValue = circles.length
    }


    update()
})

prev.addEventListener("click", function (){
    currentValue--
    if(currentValue < 1){
        currentValue = 1
    }

    update()
})


function update(){
    circles.forEach((circle, idx) =>{
        if (idx < currentValue) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active");
    
    progress.style.width = (actives.length - 1)/(circles.length - 1)*100 + "%"

    if (currentValue === 1) {
        prev.disabled = true
        
    } else if(currentValue === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}