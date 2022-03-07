const timeEl = document.getElementById("time-el")

setInterval(showTime, 1000)

function showTime() {
    let current = new Date()
    let hour = current.getHours()
    let min = current.getMinutes()
    let sec = current.getSeconds()

    let currentTime = hour + ":" + min + ":" + sec;

    timeEl.textContent = currentTime
}

function darkMode() {
    let element = document.body
    element.className = "darkmode"
}

function lightMode() {
    let element = document.body
    element.className = "lightmode"
}
