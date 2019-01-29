/**
 * Represents a single setting within Helm
 * @constructor
 * @param {string} identifier - the key for this setting used in the .helm file 
 * @param {number} min - minimum value for this setting
 * @param {number} max - maximum value for this setting
 * @param {number} steps - number of steps between min and max; 0 means continuous; non-zero means discrete values only
 * @param {number} defaultValue - the defaultValue for this setting (the value found in the init patch)
 * @param {number} perturbable - indicates whether this value "allows" for random perturbations when generating random patch settings; 'NEVER' means that this setting does not allow for perturbations (most likely because it will result in very strange / minimally useful patches), 'ONLYNONZERO' disallows perturbations when the currentValue is zero (without this option, there would be no way to generate patches with certain features fully disabled); 'ALWAYS' always allows perturbations
 * @param {number} perturbScale - by default, when we call perturbValue(), we pass a factor from 0 to 1; this factor is multiplied onto the entire range of values for this setting and a random value is generated from within this reduced range; the perturbScale allows us to make specific settings respond more or less dramatically (some settings are very sensitive and really only need to move within a small range of values to make dramatic changes in the sound, while others need larger changes to make meaningful changes to the patch).
 */
function helmSetting (identifier, min, max, steps, defaultValue, perturbable, perturbScale) {

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
        if (perturbable === 'NEVER') {
            return;
        }
        if ((perturbable === 'ONLYNONZERO') && (currentValue === 0)) {
            return;
        }

        perturbFactor *= perturbScale;

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
