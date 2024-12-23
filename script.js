const jam = document.querySelectorAll(".jarum-jam");
const menit = document.querySelectorAll(".jarum-menit");
const detik = document.querySelectorAll(".jarum-detik");
const rotatejam = document.querySelector(".jam");
const rotatemenit = document.querySelector(".menit");
const rotatedetik = document.querySelector(".detik");

function init() {

  const seconds = new Date().getSeconds();

  rotatedetik.style.rotate = `${seconds * 6}deg`;
  detik.forEach(function (e) {
    e.textContent = seconds;
    e.style.rotate = `-${seconds * 6}deg`;
  });

  const minutes = new Date().getMinutes();
  rotatemenit.style.rotate = `${minutes * 6}deg`;
  menit.forEach(function (e) {
    e.textContent = minutes;
    e.style.rotate = `-${minutes * 6}deg`;
  });
  const hours = new Date().getHours();
  rotatejam.style.rotate = `${hours * 15}deg`;

  jam.forEach(function (e) {
    e.textContent = hours;
    e.style.rotate = `-${hours * 15}deg`;
  });
}
init();

setInterval(() => {
  const now = new Date();
  const seconds = now.getSeconds();

  rotatedetik.style.rotate = `${seconds * 6}deg`;
  detik.forEach(function (e) {
    e.textContent = seconds;
    e.style.rotate = `-${seconds * 6}deg`;
  });

  if (seconds === 0) {
    minutes = now.getMinutes();
    rotatemenit.style.rotate = `${minutes * 6}deg`;
    menit.forEach(function (e) {
      e.textContent = minutes;
      e.style.rotate = `-${minutes * 6}deg`;
    });
  }

  if (seconds === 0 && now.getMinutes() === 0) {
    hours = now.getHours();
    rotatejam.style.rotate = `${hours * 15}deg`;

    jam.forEach(function (e) {
      e.textContent = hours;
      e.style.rotate = `-${hours * 15}deg`;
    });
  }
}, 1000);
