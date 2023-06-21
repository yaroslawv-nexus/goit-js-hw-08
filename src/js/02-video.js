import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const localCheck = localStorage.getItem("videoplayer-current-time");

if(localCheck) {
    player.setCurrentTime(JSON.parse(localCheck));
}


    player.on('timeupdate', throttle((event) => {
        localStorage.setItem("videoplayer-current-time", event.seconds);
}, 1000));
