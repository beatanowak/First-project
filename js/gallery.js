document.addEventListener('DOMContentLoaded', function() {

    //galleria - powiekszanie zdjecia

    var src;
    var elements = document.querySelectorAll('.gallery li');
    var body = document.querySelector('body');

    for (var i = 0; i < elements.length; i++) {
        elements[i].firstChild.addEventListener('click', function () {


            var html = this.innerHTML;
            src = this.getAttribute('src');
            console.log(src);

            var newDiv = document.createElement('div');
            newDiv.classList.add('fullScreen');
            var newImg = document.createElement('img');
            var newBut = document.createElement('button');
            newBut.classList.add('close');
            newBut.innerText = 'Zamknij';
            newImg.setAttribute('src', src);
            newDiv.appendChild(newImg);
            newDiv.appendChild(newBut);

            body.appendChild(newDiv);

            var close = document.querySelector('.close');
            close.addEventListener('click', function(event){
                newDiv.parentElement.removeChild(newDiv);
            });

        });
    }


});
