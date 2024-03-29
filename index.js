let emojis = ['😀', '🤩', '☠️', '😶‍🌫️', '🫣', '😬', '😮‍💨', '😖', '😈', '🤢'];
let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Moved the counts array outside the function

function changeEmoji() {
    let emojiIndex = Math.floor(Math.random() * emojis.length); 
    let emojiElement = document.querySelector(".emoji");
    emojiElement.innerHTML = emojis[emojiIndex]; 

    counts[emojiIndex]++;
    document.querySelector(".emoji__count-" + (emojiIndex + 1)).innerHTML = emojis[emojiIndex] + " count: <b>" + counts[emojiIndex] + " </b>";
}   
changeEmoji();
