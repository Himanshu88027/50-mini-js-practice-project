const search = document.querySelector('.search-container');
const btn = document.querySelector('.search-btn');
const input = document.querySelector('.input');

btn.addEventListener("click", function(){
    search.classList.toggle('active')
    input.focus();
})