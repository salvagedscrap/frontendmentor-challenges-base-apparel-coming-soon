const input = document.querySelector('.input');

input.oninvalid = function(event){
    event.target.setCustomValidity('Please provide a valid email')
}