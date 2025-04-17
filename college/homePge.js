const right = document.querySelector('.left');
const left = document.querySelector('.right');
const slider = document.querySelector('.slider');
let slideNumber = 1;
const images = document.querySelectorAll('.f-image');
const nextSlide=()=>{ 
    slider.style.transform = `translateY(-${slideNumber*400}px)`;
    slideNumber++;
}
const prevSlide=()=>{ 
    slider.style.transform = `translateY(-${(slideNumber-2)*400}px)`;
    slideNumber--;
}
const showFirstSlide=()=>{
    slider.style.transform = `translateY(0px)`;
    slideNumber = 1;
}
const showLastSlide=()=>{
    slider.style.transform = `translateY(-${(images.length-1)*400}px)`;
    slideNumber = images.length;
}
left.addEventListener('click',()=>{
    slideNumber<images.length?nextSlide():showFirstSlide() 
})
right.addEventListener('click',()=>{
    slideNumber>1?prevSlide():showLastSlide() 
})
