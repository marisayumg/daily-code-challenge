const secondHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function setDate() {
  const now = new Date();

  // seconds
  const seconds = now.getSeconds();
  // transform seconds into degrees + offset the 90deg we had to rotate it by when creating the hand
  const secondsDegrees = (seconds / 60) * 360 + 90;

  // minutes
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  // hours
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  //
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(seconds, minutes, hours);
}

setInterval(setDate, 1000);
