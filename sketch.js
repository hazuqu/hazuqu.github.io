let characters = [];
let charOptions = ["✦", "*", "゜", "･", "h", "z", "q"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(16);
    noSmooth();
}

function draw() {
    background(255);

    for (let i = 0; i < characters.length; i++) {
        let charInfo = characters[i];
        fill(0);
        textSize(int(charInfo.size)/2);
        text(charInfo.char, int(charInfo.x), int(charInfo.y));
        charInfo.x += map(noise(i,frameCount/4), 0, 1, -2, 2);
        charInfo.y -= map(noise(i+3,-frameCount/4), 0, 1, -2, 2);
        charInfo.size -= 0.3;
    }

    if (frameCount % 1 == 0) {
        let selectedChar = random(charOptions);
        let charSize = random([8, 4, 16, 16, 32]);
        let charInfo = {
            char: selectedChar,
            x: mouseX + random(-100, 100),
            y: mouseY + random(-100, 100),
            size: charSize
        };
        characters.push(charInfo);
    }

    characters = characters.filter(charInfo => charInfo.size > 0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
