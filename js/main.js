let form = document.querySelector('.form');
let input = document.querySelector('.form__input');

input.addEventListener('focus', function() {
    form.classList.add('form--active');
})
input.addEventListener('blur', function(){
    form.classList.remove('form--active');
})