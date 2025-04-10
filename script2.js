function displayMood() {
    let name = document.getElementById("nameInput").value;
    let mood = document.getElementById("moodInput").value;
    document.getElementByld("greeting").innerHTML = "Hello, " + name + "! Are you feeling" + mood + "?";
}

function changeBgColor() { 
    const mood = document.getElementById("moodInput").value.toLowerCase();
    }

function changeBgColorUser() { 
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color; 
}

function changeBackground() {
    const mood = document.getElementById("moodInput").value.toLowerCase();
    const colors = {
        happy: "#ffe2a6",    
        sad: "#ffaf6e",     
        calm: "#dsedf8",    
        angry: '#abcdde',   
        relaxed: '#a5d6a7',  
        excited: '#ff9800', 
        tired: '#757575',    
    };
    const emojis = {
        happy: '👯‍♂️',
        sad: '🫂',
        angry: '😀',
        calm: '🕴️',
        excited: '👀',
        tired: '☃︎'
    };

    const color = colors[mood] || "f1ecea"; 
    document.body.style.backgroundColor = color;
}