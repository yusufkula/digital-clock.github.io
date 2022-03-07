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
