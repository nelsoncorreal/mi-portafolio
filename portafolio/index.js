document.addEventListener('DOMContentLoaded', (event) => {
    loadLikes('calculator');
    loadLikes('clock');
});

function loadLikes(type) {
    const storedLikes = localStorage.getItem(type + 'Likes');
    const likeCount = document.getElementById('likeCount' + capitalize(type));
    likeCount.textContent = storedLikes ? storedLikes : 0;
}

function addLike(type) {
    const likeCount = document.getElementById('likeCount' + capitalize(type));
    let currentLikes = parseInt(likeCount.textContent);
    currentLikes++;
    likeCount.textContent = currentLikes;
    localStorage.setItem(type + 'Likes', currentLikes);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



function updateClock() {
    const now = new Date();

    // Actualizar reloj digital
    const digitalTime = now.toLocaleTimeString();
    document.getElementById('digital-time').textContent = digitalTime;

    // Actualizar reloj análogo
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = ((seconds / 60) * 360) + 90;
    const minutesDegree = ((minutes / 60) * 360) + 90;
    const hoursDegree = ((hours / 12) * 360) + 90;

    document.getElementById('second-hand').style.transform = `rotate(${secondsDegree}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minutesDegree}deg)`;
    document.getElementById('hour-hand').style.transform = `rotate(${hoursDegree}deg)`;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

function display(val) {
    document.getElementById("result").value += val;
}

function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clearScreen() {
    document.getElementById("result").value = "";
}
