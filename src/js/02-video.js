import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function whenOn(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
player.on('timeupdate', throttle(whenOn, 1000));

// function onPlay(data) {
//   let savedTime = localStorage.getItem('videoplayer-current-time');
//   if (data.seconds !== savedTime) {
//     player.setCurrentTime(savedTime);
//   }
// }
// player.on('play', onPlay);
// player.setCurrentTime(JSON.parse(storage.get('videoplayer-current-time')) || 0);
const onTime = localStorage.getItem('videoplayer-current-time');

    player.setCurrentTime(onTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });