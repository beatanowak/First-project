
document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('.guestLogin');

    form.addEventListener('submit', function (event) {

        const password = event.currentTarget.querySelector('.password-control');
        let errors = [];


        if(password.value !== '12345') {
            errors.push('Hasło jest nieprawidłowe');
        }

        if(errors.length > 0) {
            event.currentTarget.querySelector('.error-message').innerText = errors;
            event.preventDefault();
        }

    });


    let button = document.querySelector('.btn');

    button.addEventListener('mouseover', function(event){
        event.currentTarget.style.cursor = 'pointer'
    });


});
