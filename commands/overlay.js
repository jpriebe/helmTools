const fs = require('fs');
let helmPatch = require ('../helmPatch');

function overlay (files, options) {
    options = setDefaultOptions (options);

    let author = options['author'];
    let presetPath = options['path'];
    let bankName = options['bankName'];
    let bankFolder = options['bankFolder'];
    let patchBase = options['patchBase'];
    let overlayJson = options['overlayJson'];

    try {
        fs.mkdirSync (presetPath + '/' + bankName);
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }

    try {
        fs.mkdirSync (presetPath + '/' + bankName + '/' + bankFolder);
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }

    var i;

    let overlaySettings = JSON.parse(fs.readFileSync(overlayJson, 'utf8'))

    for (i = 0; i < files.length; i++) {
        let patch = helmPatch.loadFromJSON(files[i])

        if (typeof overlaySettings.settings !== 'undefined') {
            for (var k in overlaySettings.settings) {
                if (k === 'modulations') {
                    mergeModulations (patch, overlaySettings.settings.modulations)
                } else {
                    patch.applySetting(k, overlaySettings.settings[k])                
                }
            }
        }

        let json = JSON.stringify (patch.getPatchDefinition (), null, 2);

        let filename = presetPath + '/' + bankName + '/' + bankFolder + '/'
            + patch.getName() + '.helm';
        process.stdout.write (filename + "\n");

        fs.writeFile(filename, json, function(err) {
            if (err) {
                console.error(err);
                return;
            }
        });
    }


    function mergeModulations (patch, newModulations) {
        let oldModulations = patch.getSetting('modulations')

        let resultingModulations = []
        for (var i = 0; i < newModulations.length; i++) {
            if (newModulations[i] === "MODULATIONS") {
                for (var j = 0; j < oldModulations.length; j++) {
                    resultingModulations.push(oldModulations[j])
                }
            }
            else {
                resultingModulations.push(newModulations[i])
            }
        }

        patch.applySetting('modulations', resultingModulations)
    }

    function setDefaultOptions (options)
    {
        if (typeof options['path'] === 'undefined') {
            console.error ("No Helm preset path specified.  Exiting.");
            process.exit (1);
        }
        if (typeof options['overlayJson'] === 'undefined') {
            console.error ("No overlay JSON file specified.  Exiting.");
            process.exit (1);
        }
        if (typeof options['bankName'] === 'undefined') {
            options['bankName'] = 'helmTools';
        }
        if (typeof options['bankFolder'] === 'undefined') {
            options['bankFolder'] = 'overlay';
        }

        return options;
    }

}

module.exports = overlay;
