let emojis = ['😀', '🤩', '☠️', '😶‍🌫️', '🫣', '😬', '😮‍💨', '😖', '😈', '🤢'];
let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let emjCount;

function changeEmoji() {
    let emojiIndex = Math.floor(Math.random() * emojis.length); 
    let emojiElement = document.querySelector(".emoji");
    emojiElement.innerHTML = emojis[emojiIndex]; 

    counts[emojiIndex]++;
    emjCount = document.querySelector(".emoji__count-" + (emojiIndex + 1));
    emjCount.innerHTML = emojis[emojiIndex] + " count: <b>" + counts[emojiIndex] + " </b>";

    saveCount();
}   

function saveCount() {
    localStorage.setItem("storedCount", JSON.stringify(counts));
}

function loadCount() {
    let storedCount = localStorage.getItem("storedCount");
    if (storedCount) {
        counts = JSON.parse(storedCount);
        updateCounts();
    }
}

function updateCounts() {
    for (let i = 0; i < counts.length; i++) {
        let countElement = document.querySelector(".emoji__count-" + (i + 1));
        countElement.innerHTML = emojis[i] + " count: <b>" + counts[i] + " </b>";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    loadCount(); 
    changeEmoji(); 
});


window.addEventListener("beforeunload", function() {
    saveCount();
});


function clearCounts() {
    for(let i = 0; i < counts.length; i++) { 
        counts[i] = 0; 
        let countElement = document.querySelector(".emoji__count-" + (i + 1));
        countElement.innerHTML = emojis[i] + " count: <b>" + counts[i] + " </b>"; 
    }
}
