var backSound = document.querySelector("audio");



var flySquat = function (obj = {}) {
    this.x = 0
    this.y = 0
    this.points = 0
    this.counter = 0
    this.swatcount = 0
    this.state = 0
}



flySquat.prototype.newFly = function (obj) {
    let randomY = Math.floor(Math.random() * (window.innerHeight - 150 + 1)) + 150;
    let randomX = Math.floor(Math.random() * (window.innerWidth - 50 + 1)) + 0
    $("<span class='fly'></span>").css({ "top": randomY, "left": randomX })
        .appendTo("#start")
    this.counter += 1;

}

flySquat.prototype.pause = function () { clearTimeout(timer) }
flySquat.prototype.play = function () {
    var rSpeed;
    rSpeed = this.swatcount < 20 ? ((3 / 1) * 1000)
        : this.swatcount < 40 ? (Math.ceil(3 / 2) * 1000)
            : this.swatcount < 80 ? (Math.ceil(3 / 3) * 1000)
                : this.swatcount < 150 ? (500)
                    : this.swatcount < 200 ? 300 : 100

    this.counter < 21 ? sound().volume = 0.1
        : this.counter < 41 ? sound().volume = 0.2
            : this.counter < 61 ? sound().volume = 0.3
                : this.counter < 81 ? sound().volume = 0.4
                    : this.counter < 101 ? sound().volume = 0.5
                        : this.counter < 121 ? sound().volume = 0.6
                            : this.counter < 141 ? sound().volume = 0.7
                                : this.counter < 161 ? sound().volume = 0.8
                                    : this.counter < 181 ? sound().volume = 0.9 : sound().volume = 1

    this.newFly();

    timer = setTimeout(() => { this.play() }, rSpeed)
    console.log("timer: ", timer)
    if (this.counter > 10) { clearTimeout(timer); this.setHighScore(); }//gameover
}

flySquat.prototype.getScore = function () {
    return this.points
}

flySquat.prototype.getFlies = function () { return this.counter }
flySquat.prototype.getSwatCount = function () { return this.swatcount }

flySquat.prototype.setHighScore = function () {
    let user = prompt("Game Over \n Enter username")
    if (localStorage) {
        var hscores = localStorage.getItem("scores")

        if (hscores) { //if localstorage already init?
            let scores = JSON.parse(hscores);
            if (!scores[user]) {
                scores[user] = this.points;
            }
        } else {
            let score = {}
            score[user] = this.points
            localStorage.setItem("scores", JSON.stringify(score))

        }
    }

}

flySquat.prototype.getHighScores = function () {
    let scores = {}
    if (localStorage) {
        let hscores = localStorage.getItem("scores")
        if (hscores) {
            scores = JSON.parse(hscores);
        }
    }
    return scores;
}
