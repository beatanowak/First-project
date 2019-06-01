const cardsImage = ["misie", "misie", "niedz", "niedz", "she", "she", "he", "he", "auto", "auto", "obraczka", "obraczka",
    "lions", "lions", "flaming", "flaming"];

let cards = document.querySelectorAll("div.card");
cards = [...cards];  //zmieniamy type na arrow
console.log(cards);

const startTime = new Date().getTime(); //czas początkowy gry

let clickedCard = "";  //kliknięta karta
const clickedCouple = []; //para klikniętych kart
const couple = cards.length/2; //ilość par
let result = 0; //ilość zmatchowanych par


const clickCard = function() {
    console.log("Działa");
    clickedCard = this;  //przypisujemy klikniętą kartę

    if(clickedCard == clickedCouple[0]) {   //blokada ponownego kliknięcia tego samego obrazka - jeśli pierwszy click = drugiemu, gra nie reaguje
        return;
    }

    clickedCard.classList.remove("hidden");

    if (clickedCouple.length === 0) {   //przy pierwszym kliknieciu, tylko odkrywa się obrazek
        clickedCouple[0] = clickedCard;
        return;

    } else {
        cards.forEach(element => element.removeEventListener("click", clickCard)); //przy drugim kliknięciu blokujemy odsloniecie wiecej niz 2 obrazkow
        clickedCouple[1] = clickedCard; //drugi kliknięty obrazek uruchamia sprawdzanie poprawności setTimeout
        setTimeout(function () {

            if (clickedCouple[0].className === clickedCouple[1].className) {   //czy klasy są takie same? jeśli tak
                clickedCouple.forEach(element => element.classList.add("off"));  //zmieniamy im tło na białe
                result++;   //doliczamy zparowane karty
                cards = cards.filter(element => !element.classList.contains("off")); //usuwamy z tablicy zmatchowane pary, te z klasą off nie są dłużej brane pod uwage
                if(result == couple) {  //jeśli wszystko sparowaliśmy, dostajemy komunikat
                    const endTime = new Date().getTime();  //czas końcowy
                    const finishTime = (endTime - startTime)/1000; //czas gry w przeliczeniu na sekundy
                    alert(`Wygrałeś! Twój czas to ${finishTime} sekund. Możesz zagrać jeszcze raz :)`);
                    location.reload(); //uruchamiamy grę ponownie - odświeżamy
                }
            } else {
                clickedCouple.forEach(element => element.classList.add("hidden"))  //przy różnych klasach obrazki się zasłaniają
            }

            clickedCard = ""; //resetujemy ustawienia gry
            clickedCouple.length = 0;
            cards.forEach(element => element.addEventListener("click", clickCard))

        }, 500) //po pół s. obrazki się matchują lub wracją do czarnego tła

    }
};

const cardsBackgr = function() {
    cards.forEach(function(element){
        const position = Math.floor(Math.random()*cardsImage.length); //losujemy wybraną klasę
        element.classList.add(cardsImage[position]); //nadajemy wylosowaną klasę divom
        cardsImage.splice(position, 1) //usuwamy zduplikowane pary (użyty element tablicy nie jest więcej brany pod uwagę)
    });

    setTimeout(function(){
        cards.forEach(element => {
            element.classList.add('hidden');  //po 3s. obrazki zakrywają się
            element.addEventListener("click", clickCard) //rusza gra ;)
        })
    }, 3000)

};

cardsBackgr();

