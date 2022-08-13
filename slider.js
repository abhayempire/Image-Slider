let flag = 0;

slideshow(flag);

function controller(x){
    flag += x;
    slideshow(flag);
}

function slideshow(num){
    let slides = document.getElementsByClassName('image');
    // console.log(slides);
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    else if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}