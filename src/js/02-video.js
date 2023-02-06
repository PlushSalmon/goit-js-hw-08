


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time') !== null) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
}

player.on("timeupdate", throttle(t => {
    localStorage.setItem('videoplayer-current-time', t.seconds);
}, 1000)
);

