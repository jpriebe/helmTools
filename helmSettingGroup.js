let settingGroup = {
    'amp-attack' : require ('./settingGroup/amp_attack'),
    'amp-decay' : require ('./settingGroup/amp_decay'),
    'amp-sustain' : require ('./settingGroup/amp_sustain'),
    'amp-release' : require ('./settingGroup/amp_release'),
    'fil-attack' : require ('./settingGroup/fil_attack'),
    'fil-decay' : require ('./settingGroup/fil_decay'),
    'fil-sustain' : require ('./settingGroup/fil_sustain'),
    'fil-release' : require ('./settingGroup/fil_release'),
    'mod-attack' : require ('./settingGroup/mod_attack'),
    'mod-decay' : require ('./settingGroup/mod_decay'),
    'mod-sustain' : require ('./settingGroup/mod_sustain'),
    'mod-release' : require ('./settingGroup/mod_release'),
    'polyphony' : require ('./settingGroup/polyphony'),
    'oscillator-waveform' : require ('./settingGroup/oscillator_waveform'),
    'oscillator2-transpose': require ('./settingGroup/oscillator2_transpose'),
    'oscillator-detune': require ('./settingGroup/oscillator2_detune'),
    'oscillator1-unison': require ('./settingGroup/oscillator1_unison'),
    'oscillator2-unison': require ('./settingGroup/oscillator2_unison'),
    'oscillator1-volume': require ('./settingGroup/oscillator1_volume'),
    'oscillator2-volume': require ('./settingGroup/oscillator2_volume'),
    'oscillator-xmod': require ('./settingGroup/oscillator_xmod'),
    'sub-waveform': require ('./settingGroup/sub_waveform'),
    'sub-octave': require ('./settingGroup/sub_octave'),
    'sub-volume': require ('./settingGroup/sub_volume'),
    "filter-envelope-mod-cutoff": require ('./settingGroup/filter_envelope_mod_cutoff'),
    'filter-envelope-mod-res': require ('./settingGroup/filter_envelope_mod_res'),
    "filter": require ('./settingGroup/filter'),
    "reverb": require ('./settingGroup/reverb'),
    "delay": require ('./settingGroup/delay'),
    "delay-tempo": require ('./settingGroup/delay_tempo'),
    "modwheel": require ('./settingGroup/modwheel') 
};

function helmSettingGroup () {
}

helmSettingGroup.selectSettingGroup = function (domain) {
    if (typeof settingGroup[domain] === 'undefined') {
        throw new Error ('Domain "' + domain + '" is not defined.');
    }

    let groups = settingGroup[domain];
    let xary = [];
    for (var i = 0; i < groups.length; i++) {
        let g = groups[i];
        if (typeof g.weight === 'undefined') {
            g.weight = 10;
        }
        for (var j = 0; j < g.weight; j++) {
            xary.push (i);
        }
    }
    let r = Math.floor(Math.random() * xary.length);
    return groups[xary[r]];
}

helmSettingGroup.domains = [];
for (var d in settingGroup) {
    helmSettingGroup.domains.push (d);
}

module.exports = helmSettingGroup;
