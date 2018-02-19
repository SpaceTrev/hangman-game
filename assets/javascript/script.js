window.onload = function () {

    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wordList; // array of words
    var word; // random word from array selected
    var guess; // letter guessed
    var guesses = []; // letters already guessed
    var lives;   // how long till hangman gets hung
    var score; // correct guesses
    var spaceCounter; // spaces in word


var showLives = document.getElementById("livesLeft");


var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alpha.length; i++) {
        letters.id = 'alpha';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alpha[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

result = function () {
    wordContainer = document.getElementById('hold');
    accurate = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        accurate.setAttribute('id', 'wordChoice');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            spaceCounter = 1;
        }
        else {
            guess.innerHTML = "_";
        }
        guesses.push(guess);
        wordContainer.appendChild(accurate);
        accurate.appendChild(guess);
    }
}
comments = function () {
    showLives.innerHTML = "You've Got" + lives + "lives remaining";
    if (lives < 1) {
        showLives.innerHTML = "Game Over n00b";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (score + spaceCounter === guesses.length) {
            showLives.innerHTML = "You Win Muh Lorde/Lady!";
        }
    }
}
var animate = function () {
    var drawDude = lives;
    drawArray[drawDude]();
}

canvas = function () {
    stickMan = document.getElementById("stickdude")
    context = stickMan.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
};
    head = function () {
        stickMan = document.getElementById("stickdude");
        context = stickMan.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }
draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

frame1 = function () {
    draw(0, 150, 150, 150);
};

frame2 = function () {
    draw(10, 0, 10, 600);
};

frame3 = function () {
    draw(0, 5, 70, 5);
};

frame4 = function () {
    draw(60, 5, 60, 15);
};

torso = function () {
    draw(60, 36, 60, 70);
};

rightArm = function () {
    draw(60, 46, 100, 50);
};

leftArm = function () {
    draw(60, 46, 20, 50);
};
rightLeg = function () {
    draw(60, 70, 100, 100);
};
leftLeg = function () {
    draw(60, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];

check = function () {
    list.onClick = function () {
        var goose = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onlick = null;
        for (var i = 0; i < word.length; i++) {
            if (word[i] === goose) {
                guesses[i].innerHTML = goose;
                score += 1;
            }
        }
        var j = (word.indexOf(goose));
        if (j === -1) {
            lives -= 1;
            comments();
            animate();
        }
        else {
            comments();
        }
    }
}

play = function () {
    wordList = ['genisis', 'cosmic', 'desolation', 'traverse', 'scientist', 'epigenetics', 'proverbial'];
    word = wordList[Math.floor(Math.random() * wordList.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    score = 0;
    spaceCounter = 0;
    result();
    comments();
    canvas();
}

play();

document.getElementById('reset').onclick = function () {
    accurate.parentNode.removeChild(accurate);
    letters.parentNode.removeChild(letters);
    context.clearRect(0, 0, 400, 400);
    play();
}
}