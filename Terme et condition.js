let img_slider = document.getElementsByClassName('img_slider');

let etape = 0;

let nbr_img = img_slider.length;

let precedent = document.querySelector(' .precedent');
let suivant = document.querySelector(' .suivant');

function enleverActiveImage() {
    for (i = 0; i < nbr_img ; i++){
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function(){
    etape++;
    if (etape >= nbr_img){
        etape = 0;
    }
    enleverActiveImage();
    img_slider[etape].classList.add('active');
})
precedent.addEventListener('click', function(){
    etape--;
    if (etape < 0){
        etape = nbr_img -1;
    }
    enleverActiveImage();
    img_slider[etape].classList.add('active');
})

setInterval(function(){
    etape++;
    if (etape >= nbr_img){
        etape = 0;
    }
    enleverActiveImage();
    img_slider[etape].classList.add('active');
}, 3000)
