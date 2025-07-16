const numberToGuess = Math.round(Math.random() * 10);
const allreadyUsedNumbers = [];
let trysCount = 0;

function init() {
    createMessageArea();
    createLoadingSpinner();
    createCongratulatinContainer()
}

function checkNumber(event) {
    event.preventDefault();
    let inputField = document.getElementById("input");
    const button = document.getElementById("button");
    button.disabled = true;
    showLoadingSpinner();
    timeOutSettings(inputField);
}

function timeOutSettings(inputField) {
    const button = document.getElementById("button");
    setTimeout(() => {
        if (parseInt(inputField.value) !== numberToGuess) {
            wrongNumber(inputField);
        } else {
            showCongratulation();
            setTimeout(() => {
                rightNumber(inputField);
                hideCongratulation();
            }, 200)
        }button.disabled = false;
    }, 500);
}

function createMessageArea() {
    const messageArea = document.createElement("div");
    messageArea.id = "messageArea";
    document.getElementById("equal").appendChild(messageArea);
}

function createLoadingSpinner() {
    const loadingSpinner = document.createElement("div");
    loadingSpinner.id = "loadingSpinner";
    loadingSpinner.classList.add("dNone");
    document.getElementById("equal").appendChild(loadingSpinner);
}

function createCongratulatinContainer() {
    const congratulation = document.createElement("div");
    congratulation.id = "congratulation"
    congratulation.classList.add("dNone");
    document.getElementById("equal").appendChild(congratulation);
}

function showLoadingSpinner() {
    document.getElementById("loadingSpinner").classList.remove("dNone");
    messageArea = document.getElementById("messageArea")
    messageArea.classList.add("dNone");
}

function hideLoadingSpinner() {
    document.getElementById("loadingSpinner").classList.add("dNone");
    messageArea = document.getElementById("messageArea")
    messageArea.classList.remove("dNone");
}

function wrongNumber(inputField) {
    hideLoadingSpinner();
    document.getElementById("messageArea").innerHTML = "Leider war deine zahl falsch, versuche es noch einmal";
    joinAllreadyUsedNumbers(inputField);
    trysCount++;
    document.getElementById("trys").innerHTML = "Versuche: " + trysCount;
    inputField.value = "";
}

function rightNumber(inputField) {
    trysCount++;
    joinAllreadyUsedNumbers(inputField);
    throwConfetti();
    const letzteZahl = allreadyUsedNumbers[allreadyUsedNumbers.length -1];
    document.getElementById("messageArea").innerHTML = "Sehr gut, du hast die Zahl beim " + `${trysCount}` + ". Versuch erraten!<br> Die richtige Zahl war die: " + `${letzteZahl}`;
    document.getElementById("trys").innerHTML = "Versuche: " + trysCount
    inputField.value = "";
}

function joinAllreadyUsedNumbers(inputField) {
    allreadyUsedNumbers.push(inputField.value);
    document.getElementById("allreadyTryed").innerHTML = "";
    document.getElementById("allreadyTryed").innerHTML = "Bereits versuchte Zahlen: <br>" + allreadyUsedNumbers.join(",");
}

function showCongratulation() {
    hideLoadingSpinner();
    document.getElementById("congratulation").classList.remove("dNone");
    messageArea.classList.add("dNone");
};

function hideCongratulation() {
    document.getElementById("congratulation").classList.add("dNone");
    messageArea.classList.remove("dNone");
}

function throwConfetti() {
    confetti({
        angle: 60,
        spread: 55,
        particleCount: 50,
        origin: { x: 0 }
    });
    confetti({
        angle: 120,
        spread: 55,
        particleCount: 50,
        origin: { x: 1 }
    });
}