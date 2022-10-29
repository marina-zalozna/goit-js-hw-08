import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function whenOn(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.on('timeupdate', throttle(whenOn, 1000));

function onPlay(data) {
  let savedTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== savedTime) {
    player.setCurrentTime(savedTime);
  }
}
player.on('play', onPlay);