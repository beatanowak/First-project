document.addEventListener('DOMContentLoaded', function() {

    var cross = document.querySelector('.crossed');
    var arrow = document.querySelector('.arrow-img');
    var wine = document.querySelector('.wine-img');

    function noFlower() {

        if (cross.style.display = 'none'){
            cross.style.display = 'block';
        } else {
            cross.style.display = 'none';
        }
    }

    function fromFlowers(){
        if (arrow.style.display = 'none'){
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    }

    function toWine(){
        if (wine.style.display = 'none'){
            wine.style.display = 'block';
        } else {
            wine.style.display = 'none';
        }
    }


    function noFlowers() {
        setTimeout(noFlower, 1000);
        setTimeout(fromFlowers, 2000);
        setTimeout(toWine, 3000);

    }

var time = setTimeout(noFlowers, 1000);

    function again(){

            arrow.style.display = 'none';
            cross.style.display = 'none';
            wine.style.display = 'none';
    }

    if (cross.style.display === 'block' && arrow.style.display === 'block' && wine.style.display === 'block') {

        setTimeout(again, 4000);
    }



});