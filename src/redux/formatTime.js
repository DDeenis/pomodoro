export function formatTime(minutes, seconds) {
    if ((minutes + '').length < 2) minutes = '0' + minutes;
    if ((seconds + '').length < 2) seconds = '0' + seconds;

    return minutes + ':' + seconds;
}

export function getSeconds(seconds) {
    return seconds % 60;
}

export function getMinutes(seconds) {
    return Math.floor(seconds / 60);
}