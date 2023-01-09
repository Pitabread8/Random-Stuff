// Insert this is in/between the script file/tags on your website to utilize cheat codes.

let sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
let num = 0;

function createTimer() { timer = window.setTimeout(restart, 1000); }

document.addEventListener("keydown", checkKey);
createTimer();

function restart() { num = 0; }

function checkKey(e) {
    window.clearTimeout(timer);
    createTimer();

    if (e.keyCode === sequence[num]) { num += 1; }

    if (num === sequence.length) {
        window.alert("Yay, you know the Konami code!");
        restart();
    }
}