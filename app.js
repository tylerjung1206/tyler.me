
//typewriter effect for connect page yay
const text = "Reach me via any of the links below:";
let index = 0;
const speed = 80;
const targetElement = document.getElementById("connect-text");

function typewriter() {
    if (index < text.length) {
        targetElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typewriter, speed);
    }
}

typewriter();

//im modifying class attribute strings (active) when the diff classes r being clicked on
//when clicking the "active" (which is physics/ee), im blocking the other one (cs/ds) this function is in the css file
function showTabclasses(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.pee-tab, .csds-tab').forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="showTabclasses('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

//same stuff 4 skills tabs
function showTabskills(tabId) {
    document.querySelectorAll('.tab1').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.skills').forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="showTabskills('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// make sure it stays on the color when on the page or change hover shit to just be the letters
