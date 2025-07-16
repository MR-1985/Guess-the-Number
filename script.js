let numberToGues = Math.round(Math.random() * 10);
let trysCount = 0;
let inputField = document.getElementById("input");
let allreadyUsedNumbers = [];

function init() {
    createMessageArea();
    createLoadingSpinner();
    createCongratulatinContainer()
}


function checkNumber() {
    showLoadingSpinner();
    setTimeout(() => {
        if (parseInt(inputField.value) !== numberToGues) {
            wrongNumber();
            hideLoadingSpinner();
        } else {
            hideLoadingSpinner();
            showCongratulation();
            setTimeout(() => {
                rightNumber();
                hideCongratulation();
            }, 200)
        }
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
    messageArea.classList.add("dNone");
}

function hideLoadingSpinner() {
    document.getElementById("loadingSpinner").classList.add("dNone");
    messageArea.classList.remove("dNone");
}

function wrongNumber() {
    document.getElementById("messageArea").innerHTML = "Leider war deine zahl falsch, versuche es noch einmal";
    joinAllreadyUsedNumbers();
    trysCount++;
    document.getElementById("trys").innerHTML = "Versuche: " + trysCount;
    inputField.value = "";
}

function rightNumber() {
    trysCount++;
    joinAllreadyUsedNumbers();
    throwConfetti();
    document.getElementById("messageArea").innerHTML = "Sehr gut, du hast die Zahl beim " + `${trysCount}` + ". Versuch erraten!"
    document.getElementById("trys").innerHTML = "Versuche: " + trysCount
    inputField.value = "";
}

function pushAllreadyUsedNumbersToArray() {
    allreadyUsedNumbers.push(inputField.value);
}

function joinAllreadyUsedNumbers() {
    pushAllreadyUsedNumbersToArray();
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
