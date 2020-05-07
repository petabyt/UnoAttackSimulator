document.write("<h1 id='text'></h1><button onclick='generate()'>Generate</button>");
generate();

function generate() {
    var spitOut = random(1, 2);

    var cards;
    if (spitOut != 1) {
       cards = spitOut = random(1, 5);
    } else {
       cards = 0;
    }

    document.getElementById("text").innerHTML = cards;
}


function random(min, max) {
   return Math.floor(Math.random() * max) + min;
}
