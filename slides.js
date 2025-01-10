//these are for the slideshows on portfolio

function cycleButtons(word) {
    var counter = 1;

    document.getElementById('radio' + counter + word).checked = true;
    counter++;

    setInterval(function() {
        document.getElementById('radio' + counter + word).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 4000);
}

cycleButtons(""); 
cycleButtons("-mag");


function cycleBbuttons(word) {
    var counter = 1;
    document.getElementById('radio' + counter + word).checked = true;
    counter++;

    setInterval(function() {
        document.getElementById('radio' + counter + word).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1;
        }
    }, 4000);
}

cycleBbuttons("-worm")