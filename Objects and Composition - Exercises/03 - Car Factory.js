function solve(car) {
    function addEngine(power) {
        let engine = {};
        if(power <= 90 ) {
            engine.power = 90;
            engine.volume = 1800;
        } else if(power > 90 && power <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function addCarriage(carriage) {
        let carriageObject = {};
        
        carriageObject.type = carriage;
        carriageObject.color = car.color;
        return carriageObject;
    }

    function fixWheels(wheel) {
        let wheels = [];
        wheels.length = 4;
        if(wheel % 2 == 0) {
            wheel--;
        };
        wheels.fill(wheel);

        return wheels;
    }

    let result = {
        model: car.model,
        engine: addEngine(car.power),
        carriage: addCarriage(car.carriage),
        wheels: fixWheels(car.wheelsize)
    };

    return result;
}