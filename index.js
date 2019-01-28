const fs = require('fs');
let helmPatch = require ('./helmPatch');

let author = 'qub1t'
let numPatchesToGenerate = 64;
let bankPath = '/Users/priebe/Library/Audio/Presets/Helm/helmgen';
let folder = 'helmgen';
let patchBase = 'helmgen';
let perturbFactor = 0.1;

for (var i = 0; i < numPatchesToGenerate; i++) {
    patchName = patchBase + '-' + zeroFill (i, 4)
    let p = new helmPatch (author, patchName, folder);
    p.applyRandomSettingGroups ();
    p.perturbValues (perturbFactor);

    let json = JSON.stringify (p.getPatchDefinition (), null, 2);

    let filename = bankPath + '/' + folder + '/'
        + patchName + '.helm';
    process.stdout.write (filename + "\n");

    fs.writeFile(filename, json, function(err) {
        if(err) {
            return console.log(err);
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
