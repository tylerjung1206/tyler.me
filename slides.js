function cycleButtons(word) {
    var counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter + word).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 5000);
}

cycleButtons(""); 
cycleButtons("-mag");


function cycleBbuttons(word) {
    var counter = 1;
    setInterval(function() {
        document.getElementById('radio' + counter + word).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1;
        }
    }, 5000);
}

cycleBbuttons("-worm")