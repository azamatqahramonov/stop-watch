const display = document.querySelector(".stop-watch_display p");
const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");

let interId;
let seconds = 0;

startBtn.addEventListener("click", () => {
  interId = setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    display.innerText = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }, 1000); 
});

stopBtn.addEventListener("click", () => {
  clearInterval(interId);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interId);
  seconds = 0; 
  display.innerText = "00:00:00"; 
});
