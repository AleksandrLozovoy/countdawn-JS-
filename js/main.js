// Находим текущий год
const currentYear = new Date().getFullYear();
// Находим следующий год
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Ищем элементы на страницах и присваиваем значения
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

year.innerText = currentYear + 1;

function updateCounter() {
  // Находим разницу между следующим и этим годом
  const currentTime = new Date();
  const diff = nextYear - currentTime;
  // Определяем сколько дней, часов, минут до Нового Года
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}
updateCounter();
setInterval(updateCounter, 1000);

// Добавляем прелоадер
setTimeout(() => {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);
