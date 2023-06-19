import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));


    player.on('timeupdate', throttle((event) => {
        localStorage.setItem("videoplayer-current-time", event.seconds);
}, 1000));
