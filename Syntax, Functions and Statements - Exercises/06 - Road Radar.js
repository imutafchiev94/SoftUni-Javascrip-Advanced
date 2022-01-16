function radar(speed, area) {
    let motorwayMaxSpeed = 130;
    let interstateMaxSpeed = 90;
    let cityMaxSpeed = 50;
    let residentialMaxSpeed = 20;
    let speeding = 20;
    let excessiveSpeeding = 40;

    switch(area) {
        case "motorway": {
            if(speed > motorwayMaxSpeed && speed <= motorwayMaxSpeed + speeding) {
                console.log(`The speed is ${speed - motorwayMaxSpeed} km/h faster than the allowed speed of ${motorwayMaxSpeed} - speeding`);
            } else if(speed > motorwayMaxSpeed + speeding && speed <= motorwayMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - motorwayMaxSpeed} km/h faster than the allowed speed of ${motorwayMaxSpeed} - excessive speeding`);
            } else if(speed > motorwayMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - motorwayMaxSpeed} km/h faster than the allowed speed of ${motorwayMaxSpeed} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a ${motorwayMaxSpeed} zone`);
            }
            break;
        } case 'interstate': {
            if(speed > interstateMaxSpeed && speed <= interstateMaxSpeed + speeding) {
                console.log(`The speed is ${speed - interstateMaxSpeed} km/h faster than the allowed speed of ${interstateMaxSpeed} - speeding`);
            } else if(speed > interstateMaxSpeed + speeding && speed <= interstateMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - interstateMaxSpeed} km/h faster than the allowed speed of ${interstateMaxSpeed} - excessive speeding`);
            } else if(speed > interstateMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - interstateMaxSpeed} km/h faster than the allowed speed of ${interstateMaxSpeed} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateMaxSpeed} zone`);
            }
            break;
        } case 'city': {
            if(speed > cityMaxSpeed && speed <= cityMaxSpeed + speeding) {
                console.log(`The speed is ${speed - cityMaxSpeed} km/h faster than the allowed speed of ${cityMaxSpeed} - speeding`);
            } else if(speed > cityMaxSpeed + speeding && speed <= cityMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - cityMaxSpeed} km/h faster than the allowed speed of ${cityMaxSpeed} - excessive speeding`);
            } else if(speed > cityMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - cityMaxSpeed} km/h faster than the allowed speed of ${cityMaxSpeed} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a ${cityMaxSpeed} zone`);
            }
            break;
        } case 'residential': {
            if(speed > residentialMaxSpeed && speed <= residentialMaxSpeed + speeding) {
                console.log(`The speed is ${speed - residentialMaxSpeed} km/h faster than the allowed speed of ${residentialMaxSpeed} - speeding`);
            } else if(speed > residentialMaxSpeed + speeding && speed <= residentialMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - residentialMaxSpeed} km/h faster than the allowed speed of ${residentialMaxSpeed} - excessive speeding`);
            } else if(speed > residentialMaxSpeed + excessiveSpeeding) {
                console.log(`The speed is ${speed - residentialMaxSpeed} km/h faster than the allowed speed of ${residentialMaxSpeed} - reckless driving`);
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialMaxSpeed} zone`);
            }
            break;
        }
    }
}