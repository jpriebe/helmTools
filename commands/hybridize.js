const fs = require('fs');
let helmPatch = require ('../helmPatch');

function hybridize (files, options) {
    options = setDefaultOptions (options);

    let author = options['author'];
    let numPatchesToGenerate = options['numPatches'];
    let presetPath = options['path'];
    let bankName = options['bankName'];
    let bankFolder = options['bankFolder'];
    let patchBase = options['patchBase'];
    let perturbFactor = options['perturbFactor'];

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

    let paramSet = {}
    for (i = 0; i < files.length; i++) {
        let patch = JSON.parse(fs.readFileSync(files[i], 'utf8'));
        for (setting in patch.settings) {
            if (typeof paramSet[setting] === 'undefined') {
                paramSet[setting] = [];
            }
            paramSet[setting].push (patch.settings[setting])
        }
    }

    for (i = 0; i < numPatchesToGenerate; i++) {
        patchName = patchBase + '-' + zeroFill (i, 3)
        let patch = new helmPatch (author, patchName, bankName);
        for (setting in paramSet) {
            patch.applySetting (setting, paramSet[setting][Math.floor(Math.random() * paramSet[setting].length)]);
        }
        patch.perturbValues (perturbFactor);

        let json = JSON.stringify (patch.getPatchDefinition (), null, 2);

        let filename = presetPath + '/' + bankName + '/' + bankFolder + '/'
            + patchName + '.helm';
        process.stdout.write (filename + "\n");

        fs.writeFile(filename, json, function(err) {
            if (err) {
                console.error(err);
                return;
            }
        }); 
    }

    function zeroFill( number, width )
    {
        width -= number.toString().length;
        if ( width > 0 )
        {
            return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
        }
        return number + ""; // always return a string
    }


    function setDefaultOptions (options)
    {
        if (typeof options.author === 'undefined') {
            options.author = 'helmTools';
        }
        if (typeof options['numPatches'] === 'undefined') {
            options['numPatches'] = 64;
        }
        else {
            options['numPatches'] = parseInt (options['numPatches']);
            if ((options['numPatches'] < 1) || (options['numPatches'] > 1000)) {
                console.error ("Error: num-patches must be between 1 and 1000, inclusive.");
                process.exit (1);
            }
        }
        if (typeof options['path'] === 'undefined') {
            console.error ("No Helm preset path specified.  Exiting.");
            process.exit (1);
        }
        if (typeof options['bankName'] === 'undefined') {
            options['bankName'] = 'helmTools';
        }
        if (typeof options['bankFolder'] === 'undefined') {
            options['bankFolder'] = 'hybridize';
        }
        if (typeof options['patchBase'] === 'undefined') {
            options['patchBase'] = 'helmTools';
        }
        if (typeof options['perturbFactor'] === 'undefined') {
            options['perturbFactor'] = 0;
        }
        else {
            options['perturbFactor'] = options['perturbFactor'] * 1.0;
            if ((options['perturbFactor'] < 0) || (options['perturbFactor'] > 1)) {
                console.error ("Error: perturb-factor must be between 0 and 1, inclusive.");
                process.exit (1);
            }
        }

        return options;
    }

}

module.exports = hybridize;
