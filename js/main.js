
document.addEventListener('DOMContentLoaded', function() {


    //rozwijane menu

    const wedDay = document.querySelector('.wed-day');
    const wedDayList = document.querySelector('.wed-day-event');

    wedDay.addEventListener('mouseover', function(event){
        wedDayList.style.display = 'block';
    });

    wedDay.addEventListener('mouseleave', function(){
        wedDayList.style.display = 'none';
    });

    //rozwijane menu2


    const guestZone = document.querySelector('.guest_zone');
    const guestZoneList = document.querySelector('.guestZoneList');

    guestZone.addEventListener('mouseover', function(event){
        guestZoneList.style.display = 'block';
    });

    guestZone.addEventListener('mouseleave', function(){
        guestZoneList.style.display = 'none';
    });


    //slider

    var nextPict = document.querySelector('.arrow-right');
    var previousPict = document.querySelector('.arrow-left');
    var elementsLi = document.querySelectorAll('.slider .slide-img');

    var indexNumber = 0;


    //wywolujemy automatyczne przesuwanie sie zdjec
    animacja();

    //zdjecia przesuwane kliknieciem

    elementsLi[indexNumber].classList.add('visible');

    nextPict.addEventListener('click', function(){
        elementsLi[indexNumber].classList.remove('visible');
        indexNumber++;

        if(indexNumber >= elementsLi.length) {
            indexNumber = 0;
        }
        elementsLi[indexNumber].classList.add('visible');

    });

    previousPict.addEventListener('click', function(){
        elementsLi[indexNumber].classList.remove('visible');
        indexNumber--;


        if(indexNumber < 0) {
            indexNumber = elementsLi.length-1
        }

        elementsLi[indexNumber].classList.add('visible');

    });

    //automatyczne przesuwanie zdjec w sliderze

    function animacja() {
        elementsLi[indexNumber].classList.remove('visible');
        indexNumber++;

        if(indexNumber >= elementsLi.length) {
            indexNumber = 0;
        }
        elementsLi[indexNumber].classList.add('visible');
        setTimeout(animacja, 5000);
    }


    // ankieta: opcjonalny nocleg

    let place = document.querySelector('.trans1');

    place.addEventListener('change', function(event){

        if (event.currentTarget.value === 'Nie') {
            event.currentTarget.parentElement.nextElementSibling.style.display = 'block';
        } else {
            event.currentTarget.parentElement.nextElementSibling.style.display = 'none';
        }
    });


    // ankieta: opcjonalna inna dieta

    let diet = document.querySelector('.dietOption');

    diet.addEventListener('change', function(event){

        if (event.currentTarget.value === 'Inną') {
            event.currentTarget.parentElement.nextElementSibling.style.display = 'block';
        } else {
            event.currentTarget.parentElement.nextElementSibling.style.display = 'none';
        }
    });


    // ankieta: obecność

    let ifPresent = document.querySelector('.myPresence');

    ifPresent.addEventListener('change', function(event){

        console.log(event.currentTarget.parentElement.nextElementSibling);

        if (event.currentTarget.value !== 'Tak') {
            event.currentTarget.parentElement.nextElementSibling.style.display = 'none';
        } else {
            event.currentTarget.parentElement.nextElementSibling.style.display = 'block';
        }
    });


    //walidacja formularza

    const survey = document.querySelector('.surv');

    survey.addEventListener('submit', function (event) {

        let ifPresent = document.querySelector('.myPresence');

        let error = [];
        const name = event.currentTarget.querySelector('.firstName');

        if (name.value.length <= 2) {
            error.push('Twoje imię jest za krótkie');

        }

        const surname = event.currentTarget.querySelector('.secondName');

        if (surname.value.length <= 2) {
            error.push('Twoje nazwisko jest za krótkie');

        }

        const presence = document.querySelector('.myPresence');

        if(
            presence.value === '-Wybierz-'

        ){

            error.push('Musisz potwierdzić obecność');

        }

        const diet = document.querySelector('.dietOption');

        if(
            diet.value === '-Wybierz-' && ifPresent.value === 'Tak'

        ){

            error.push('Musisz wybrać opcję diety');

        }

        const otherDiet = document.querySelector('.otherDiet');
        const otherDietOpt = document.querySelector('.otherDiets');

        if(
            (otherDietOpt.value === '') && (otherDiet.value === 'Inną')

        ){

            error.push('Wpisz swoją dietę');

        }

        const trans1 = document.querySelector('.trans1');

        if(
            trans1.value === '-Wybierz-' && ifPresent.value === 'Tak'

        ){

            error.push('Musisz wybrać opcję transportu');

        }

        const trans2 = document.querySelector('.trans2');

        if(
            trans2.value === '-Wybierz-' && ifPresent.value === 'Tak'

        ){

            error.push('Musisz wybrać opcję transportu');

        }

        const trans3 = document.querySelector('.trans3');

        if(
            trans3.value === '-Wybierz-' && ifPresent.value === 'Tak'

        ){

            error.push('Musisz wybrać opcję transportu');

        }

        //wysyłanie maila z formularza

        const accomm = document.querySelector('.accommodation');
        const accommOpt = document.querySelector('.accomm');

        if(
            (accomm.value !== 'Nie') && (accommOpt.value === '')

        ){

            error.push('Podaj opcję noclegu');

        }

        var data = new FormData();
        data.append('message', 'BBBBBBBBBBBBBBBBBBB');

        if(error.length > 0) {

            event.currentTarget.querySelector('.error-message2').innerText = error.join('\n');
            event.preventDefault();

        } else {

            axios.post('http://localhost:7777/sendmail', {
                name: name.value,
                surname: surname.value,
                presence: presence.value,
                trans1: trans1.value,
                trans2: trans2.value,
                trans3: trans3.value,
                diet: diet.value,
                otherDiet: otherDietOpt.value,
                accomm: accommOpt.value,

            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            });

            alert('Dziękujemy za potwierdzenie obecności ;)');

        }

        console.log(error);

        //koniec wysyłania


    });

    //odliczanie czasu


    setInterval(function(){weddingTime(2020, 10, 10, 20, 0, 0, 0);}, 1000);


    function weddingTime(year, month, day, hour, minute, second, milisecond) {

        var timeNow = new Date();
        var weddingTimes = new Date(year, month, day, hour, minute, second, milisecond);

        var timeLeft = weddingTimes.getTime() - timeNow.getTime();

        if (timeLeft > 0) {
            let seconds = timeLeft / 1000;
            let minutes = seconds / 60;
            let hours = minutes / 60;
            let days = hours / 24;

            let secLeft = Math.floor(seconds % 60);
            let minLeft = Math.floor(minutes % 60);
            let hourLeft = Math.floor(hours % 24);
            let daysLeft = Math.floor(days);

            if (minLeft < 10)
            minLeft = "0" + minLeft;
            if (secLeft < 10)
            secLeft = "0" + secLeft;

            document.getElementById('clock').innerHTML = daysLeft+ " dni, " +hourLeft + " godzin, " + minLeft + " minut, " + secLeft+ " sekund." ;
            // setTimeout("weddingTime(2019, 5, 20, 20, 0, 0, 0)", 1000);

        } else {
            document.getElementById('clock').innerHTML = "Mamy nadzieję, że bawiliście się wyśmienicie ;)";
        }

    }

// heart click

    var animated = false;

    var heart = document.querySelector('.heart');

    heart.addEventListener('click', function(){
        if(!animated) {
            this.classList.add('happy');
            animated = true;
        } else {
            event.currentTarget.classlist.remove('happy');
            animated = false;
        }
    });

});

