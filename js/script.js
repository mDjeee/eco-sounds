const playBtn = document.querySelector('.play-btn');
const audio = new Audio();

const vorobey = document.querySelector('.vorobey');
const solovey = document.querySelector('.solovey');
const drozd = document.querySelector('.drozd');
const malinovka = document.querySelector('.malinovka');
const javronok = document.querySelector('.javronok');
const slavka = document.querySelector('.slavka');

const body = document.querySelector('.body');

let isPlay = false;
let playNum = 0;

audio.src = '../audio/vorobey.mp3';
audio.currentTime = 0;


function playAudio() {
  if(!isPlay){
      audio.play();
      isPlay = true;
  }
  else{
      audio.pause();
      isPlay = false;
  }
  playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', playAudio);

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => item.addEventListener('click', (event) => {

  navItems.forEach(elem => {
    elem.classList.remove('active');
  })

  event.target.classList.add('active');
  audio.src = `../audio/${event.target.dataset.audio}.mp3`;
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
  playBtn.classList.add('pause');
  body.style.background = `url('../img/${event.target.dataset.audio}.jpg')`
}))