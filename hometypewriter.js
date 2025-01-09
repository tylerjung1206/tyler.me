//for homepage
const hometext = "Nice to meet you, I'm";
let i = 0;
const sokdo = 80;
const element = document.getElementById("greet");

function hometype() {
    if (i < hometext.length) {
        element.innerHTML += hometext.charAt(i);
        i++;
        setTimeout(hometype, sokdo);
    }
}

hometype();

//my name
const nametext = "Tyler."
let j = 0;
const bballi = 200;
const e = document.getElementById('name');

function nametype() {

    if (j <nametext.length) {
        const span = document.createElement('span');
        span.innerHTML = nametext.charAt(j);
        e.appendChild(span);
        j++;
        setTimeout(nametype, bballi);
    }
}

setTimeout(nametype, 2100); 


//name hover glow
const nameText = document.getElementById('name');

nameText.addEventListener('mouseenter', function() {
    this.style.textShadow = '0 0 8px rgba(0, 191, 255, 0.7), 0 0 15px rgba(0, 191, 255, 0.7), 0 0 20px rgba(34, 148, 231, 0.7)';
});

nameText.addEventListener('mouseleave', function() {
    this.style.textShadow = 'none';
}
)
