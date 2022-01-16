function walk(steps, stepLength, speed) {
    let distance = (steps * stepLength) / 1000;
    let pauses = Math.floor(distance / 0.5);
    let time = (distance / speed) * 60;

    let seconds = (time % 1 * 60).toFixed(0);
    let minutes = Math.floor(time);
    minutes += pauses;

    let hours = 0;

    if(minutes > 60) {
        minutes -= 60;
        hours++;
    }

    if(hours < 1){
        if(minutes < 10) {
            if(seconds < 10) {
                console.log(`00:0${minutes}:0${seconds}`);
            } else {
                console.log(`00:0${minutes}:${seconds}`);
            }
        } else {
            if(seconds < 10) {
                console.log(`00:${minutes}:0${seconds}`);
            } else {
                console.log(`00:${minutes}:${seconds}`);
            }
        }
    } else {
        if(minutes < 10) {
            if(seconds < 10) {
                console.log(`0${hours}:0${minutes}:0${seconds}`);
            } else {
                console.log(`0${hours}:0${minutes}:${seconds}`);
            }
        } else {
            if(seconds < 10) {
                console.log(`0${hours}:${minutes}:0${seconds}`);
            } else {
                console.log(`0${hours}:${minutes}:${seconds}`);
            }
        }
    }
}