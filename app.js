let timeEl = document.getElementById("time-el")
let content = document.getElementById("content")


setInterval(Uktime, 1000)

function Uktime() {
    let current = new Date()
    let hour = current.getHours()
    let min = current.getMinutes()
    let sec = current.getSeconds()

    let currentTime = hour + ":" + min + ":" + sec;

    timeEl.textContent = currentTime
}

