console.log("JavaScript loaded!");

function displayMood() {
    let name = document.getElementById("nameInput").value;
    let mood = document.getElementById("moodInput").value.toLowerCase();
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Are you feeling " + mood + "?";
    changeBackground(mood);
}


function setMood(mood) {
    let name = document.getElementById("nameInput").value || "friend";
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Are you feeling " + mood + "?";
    changeBackground(mood);
}
    
function changeBackground(mood){ ;
    const colors = {
        happy : "rgb(255,226,171)",    
        sad: "rgb(255,175,110)",     
        calm: "rgb(220,227,248)",    
        angry: 'rgb(171,205,222)',   
        relaxed: 'rgb(165,214,167)',  
        excited: 'rgb(255,152,0)', 
        tired: 'rgb(117,117,117)',    
    };

    const emojis = {
        happy: '👯‍♂️',
        sad: '🫂',
        angry: '😀',
        calm: '🕴️',
        excited: '👀',
        tired: '☃︎'
    };

    const color = colors[mood] || "#f1ecea"; 
    const emoji = emojis[mood] || "🦉";

    document.body.style.backgroundColor = color;
    document.getElementById("greeting").innerHTML += " " + emoji;
}