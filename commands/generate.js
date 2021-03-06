const fs = require('fs');
let helmPatch = require ('../helmPatch');

function generate (options) {
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

    for (var i = 0; i < numPatchesToGenerate; i++) {
        patchName = patchBase + '-' + zeroFill (i, 3)
        let p = new helmPatch (author, patchName, bankName);
        p.applyRandomSettingGroups ();
        p.perturbValues (perturbFactor);

        let json = JSON.stringify (p.getPatchDefinition (), null, 2);

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
            options['bankFolder'] = 'generate';
        }
        if (typeof options['patchBase'] === 'undefined') {
            options['patchBase'] = 'helmTools';
        }
        if (typeof options['perturbFactor'] === 'undefined') {
            options['perturbFactor'] = 0.1;
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

module.exports = generate;
