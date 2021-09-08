// type writter effect.
let text = document.getElementById('text-machine');
let str = text.innerHTML;

text.innerHTML = '';

let speed = 200;
let i = 0;

//type writter
function typeWritter(){
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWritter, speed);
    
    }
}
setTimeout(typeWritter, speed);