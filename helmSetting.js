function helmSetting (identifier, min, max, steps, defaultValue, perturbable) {

    if ((typeof identifier === 'undefined')
       || (typeof min === 'undefined')
       || (typeof max === 'undefined')
       || (typeof steps === 'undefined')
       || (typeof defaultValue === 'undefined')
       || (typeof perturbable === 'undefined'))
    {
        throw new Error ('all parameters required');
    }

    let currentValue = defaultValue;

    this.getIdentifier = function () {
        return identifier;
    };

    this.getCurrentValue = function () {
        return currentValue;
    };

    this.setValue = function (val) {
        if (val < min) {
            throw new Error ('Setting ' + identifier + ': value ' + val + ' is below min value of ' + min + '.');
        }
        if (val > max) {
            throw new Error ('Setting ' + identifier + ': value ' + val + ' is above max value of ' + max + '.');
        }
        if (steps !== 0) {
            if (val !== parseInt (val)) {
                throw new Error ('Setting ' + identifier + ': value ' + val + ' must be an integer.');
            }
        }

        currentValue = val;
    };

    this.initValue = function () {
        currentValue = defaultValue;
    };

    this.setRandomValue = function () {
        if (steps !== 0) {
            currentValue = Math.floor(Math.random() * (+max - +min)) + +min;
        }
        else {
            currentValue = Math.random () * (+max - +min) + +min; 
        }
    }

    this.perturbValue = function (perturbFactor) {
        if (!perturbable) {
            return;
        }

        let prange = (max - min) * perturbFactor;
        let pmax = currentValue + prange / 2;
        let pmin = currentValue - prange / 2;

        let oldValue = currentValue;

        if (steps !== 0) {
            // it's unclear how to perturb a non-float value;
            // should we even try?
            return;
            currentValue = Math.floor(Math.random() * (+max - +min)) + +min;
        }
        else {
            currentValue = Math.random () * (+pmax - +pmin) + +pmin; 
        }

        if (currentValue > max) {
            currentValue = max;
        }
        if (currentValue < min) {
            currentValue = min;
        }

        //process.stdout.write(identifier + ': ' + oldValue + " ==> " + currentValue + "\n");
    }
}

module.exports = helmSetting;
