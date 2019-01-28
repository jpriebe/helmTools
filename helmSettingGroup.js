let settingGroup = {
    'amp-envelope' : [
        {
            'label': 'bass',
            'values': {
                "amp_attack": 0,
                "amp_decay": 1.3894383302547885783,
                "amp_release": 0.76470588235294112422,
                "amp_sustain": 0.49218751955777406693, 
                "polyphony": 1,
            }
        },
        {
            'label': 'pluck',
            'values': {
                "amp_attack": 0.10000000149011611938,
                "amp_decay": 0.94117647058823517003,
                "amp_release": 0.76470588235294112422,
                "amp_sustain": 0,
                "polyphony": 6,
            }
        },
        {
            'label': 'pad',
            'values': {
                "amp_attack": 0.56617647058823528106,
                "amp_decay": 1.5,
                "amp_release": 1.0372242647058822484,
                "amp_sustain": 0.82875689338235292158,
                "polyphony": 12,
            }
        },
    ],
    'oscillator-waveform' : [
        {
            'label': 'sine+sine',
            'weight': 50,
            'values': {
                "osc_1_waveform": 0,
                "osc_2_waveform": 0,
            }
        },
        {
            'label': 'tri+tri',
            'weight': 50,
            'values': {
                "osc_1_waveform": 1,
                "osc_2_waveform": 1,
            }
        },
        {
            'label': 'square+square',
            'weight': 50,
            'values': {
                "osc_1_waveform": 2,
                "osc_2_waveform": 2,
            }
        },
        {
            'label': 'saw+saw',
            'weight': 50,
            'values': {
                "osc_1_waveform": 3,
                "osc_2_waveform": 3,
            }
        },
        {
            'label': 'square+saw',
            'values': {
                "osc_1_waveform": 2,
                "osc_2_waveform": 3,
            }
        },
        {
            'label': 'saw+square',
            'values': {
                "osc_1_waveform": 3,
                "osc_2_waveform": 2,
            }
        },
        {
            'label': 'saw+tri',
            'values': {
                "osc_1_waveform": 3,
                "osc_2_waveform": 1,
            }
        },
        {
            'label': 'square+tri',
            'values': {
                "osc_1_waveform": 2,
                "osc_2_waveform": 1,
            }
        },
    ],
    'oscillator2-transpose': [
        {
            'label': 'transpose0',
            'weight': 20,
            'values': {
                "osc_2_transpose": 0,
            }
        },
        {
            'label': 'transpose12',
            'values': {
                "osc_2_transpose": 12,
            }
        },
        {
            'label': 'transpose24',
            'weight': 4,
            'values': {
                "osc_2_transpose": 24,
            }
        },
        {
            'label': 'transpose-12',
            'values': {
                "osc_2_transpose": -12,
            }
        },
        {
            'label': 'transpose7',
            'weight': 2,
            'values': {
                "osc_2_transpose": 7,
            }
        },
    ],
    'oscillator-detune': [
        {
            'label': 'detune0',
            'values': {
                "osc_2_tune": 0,
            }
        },
        {
            'label': 'detune10',
            'values': {
                "osc_2_tune": 0.10,
            }
        },
        {
            'label': 'detune20',
            'values': {
                "osc_2_tune": 0.20,
            }
        },
        {
            'label': 'detune30',
            'values': {
                "osc_2_tune": 0.30,
            }
        },
    ],
    'oscillator1-unison': [
        {
            'label': 'unison1',
            'values': {
                "osc_1_unison_voices": 1,
                "osc_1_unison_detune": 0,
            }
        },
        {
            'label': 'unison3',
            'values': {
                "osc_1_unison_voices": 3,
                "osc_1_unison_detune": 15,
            }
        },
        {
            'label': 'unison7',
            'values': {
                "osc_1_unison_voices": 7,
                "osc_1_unison_detune": 20,
            }
        },
        {
            'label': 'unison11',
            'values': {
                "osc_1_unison_voices": 11,
                "osc_1_unison_detune": 27,
            }
        },
    ],
    'oscillator2-unison': [
        {
            'label': 'unison1',
            'values': {
                "osc_2_unison_voices": 1,
                "osc_2_unison_detune": 0,
            }
        },
        {
            'label': 'unison3',
            'values': {
                "osc_2_unison_voices": 3,
                "osc_2_unison_detune": 15,
            }
        },
        {
            'label': 'unison7',
            'values': {
                "osc_2_unison_voices": 7,
                "osc_2_unison_detune": 20,
            }
        },
        {
            'label': 'unison11',
            'values': {
                "osc_2_unison_voices": 11,
                "osc_2_unison_detune": 27,
            }
        },
    ],
    'oscillator1-volume': [
        {
            'label': 'volume1',
            'values': {
                "osc_1_volume": 0.6,
            }
        },
        {
            'label': 'volume2',
            'values': {
                "osc_1_volume": 0.7,
            }
        },
        {
            'label': 'volume3',
            'values': {
                "osc_1_volume": 0.8,
            }
        },
        {
            'label': 'volume4',
            'values': {
                "osc_1_volume": 0.9,
            }
        },
    ],
    'oscillator2-volume': [
        {
            'label': 'volume1',
            'values': {
                "osc_2_volume": 0.6,
            }
        },
        {
            'label': 'volume2',
            'values': {
                "osc_2_volume": 0.7,
            }
        },
        {
            'label': 'volume3',
            'values': {
                "osc_2_volume": 0.8,
            }
        },
        {
            'label': 'volume4',
            'values': {
                "osc_2_volume": 0.9,
            }
        },
    ],
    'oscillator-xmod': [
        {
            'label': 'xmod0',
            'weight': 100,
            'values': {
                "cross_modulation": 0,
            }
        },
        {
            'label': 'xmod1',
            'values': {
                "cross_modulation": 0.25,
            }
        },
        {
            'label': 'xmod2',
            'values': {
                "cross_modulation": 0.5,
            }
        },
        {
            'label': 'xmod3',
            'values': {
                "cross_modulation": 0.7,
            }
        },
        {
            'label': 'xmod4',
            'values': {
                "cross_modulation": 1,
            }
        },
    ],
    'sub-volume': [
        {
            'label': 'volume1',
            'values': {
                "sub_volume": 0,
            }
        },
        {
            'label': 'volume2',
            'values': {
                "sub_volume": 0.1,
            }
        },
        {
            'label': 'volume3',
            'values': {
                "sub_volume": 0.2,
            }
        },
        {
            'label': 'volume4',
            'values': {
                "sub_volume": 0.5,
            }
        },
        {
            'label': 'volume5',
            'values': {
                "sub_volume": 0.75,
            }
        },
        {
            'label': 'volume6',
            'values': {
                "sub_volume": 1,
            }
        },
    ],
    "filter": [
        {
            'label': 'filter1',
            'values': {
                "filter_blend": 0.77620967741935487094,
                "filter_drive": -12,
                "filter_on": 1,
                "filter_shelf": 0,
                "filter_style": 1,
                "cutoff": 74.612499999999997158,
                "resonance": 0.26666666666666671848,
            }
        },
        {
            'label': 'filter2',
            'values': {
                "filter_blend": 0,
                "filter_drive": -10.893500328063964844,
                "filter_on": 1,
                "filter_shelf": 0,
                "filter_style": 1,
                "cutoff": 72.137500000000002842,
                "resonance": 0.26666666666666671848,
            }
        },
        {
            'label': 'filter3',
            'values': {
                "filter_blend": 0,
                "filter_drive": -10.893500328063964844,
                "filter_on": 1,
                "filter_shelf": 0,
                "filter_style": 1,
                "cutoff": 62.137500000000002842,
                "resonance": 0.36666666666666671848,
            }
        },
    ],
    'filter-envelope' : [
        {
            'label': 'sweep',
            'values': {
                "fil_attack": 0,
                "fil_decay": 2.1609239568542553123,
                "fil_env_depth": 0,
                "fil_release": 1.8189338235294116863,
                "fil_sustain": 0.32999999999999996003,
            },
            'modulations': [
                {
                    "source": "fil_envelope",
                    "destination": "cutoff",
                    "amount": -40.504489758035148839
                }
            ]
        },
        {
            'label': 'pluck',
            'values': {
                "fil_attack": 0,
                "fil_decay": 0.51125919818878173828,
                "fil_env_depth": 19.2320098876953125,
                "fil_release": 0.30749850241599746559,
                "fil_sustain": 0,
            },
            'modulations': [
                {
                    "source": "fil_envelope",
                    "destination": "cutoff",
                    "amount": 50.098528187957811042
                }
            ]
        },
    ],
    "reverb": [
        {
            'label': 'reverb1',
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.85,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb2',
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.90,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb3',
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.5,
                "reverb_feedback": 0.90,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb4',
            'weight': 2,
            'values': {
                "reverb_damping": 0.25,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.96,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb5',
            'weight': 2,
            'values': {
                "reverb_damping": 0.5,
                "reverb_dry_wet": 0.55,
                "reverb_feedback": 0.96,
                "reverb_on": 1,
            }
        },
    ],
    "delay": [
        {
            'label': 'delay-off',
            'weight': 100,
            'values': {
                "delay_on": 0,
            }
        },
        {
            'label': 'delay1',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.25,
                "delay_dry_wet": 0.25,
            }
        },
        {
            'label': 'delay2',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.25,
                "delay_dry_wet": 0.50,
            }
        },
        {
            'label': 'delay3',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.25,
                "delay_dry_wet": 0.75,
            }
        },
        {
            'label': 'delay4',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.5,
                "delay_dry_wet": 0.25,
            }
        },
        {
            'label': 'delay5',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.5,
                "delay_dry_wet": 0.5,
            }
        },
        {
            'label': 'delay6',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.5,
                "delay_dry_wet": 0.75,
            }
        },
        {
            'label': 'delay1',
            'values': {
                "delay_on": 1,
                "delay_feedback": 0.75,
                "delay_dry_wet": 0.5,
            }
        },
    ],
    "delay-tempo": [
        {
            'label': 'delay-tempo1',
            'values': {
                "delay_frequency": 2,
                "delay_tempo": 7,
            }
        },
        {
            'label': 'delay-tempo2',
            'values': {
                "delay_frequency": 2,
                "delay_tempo": 8,
            }
        },
        {
            'label': 'delay-tempo3',
            'values': {
                "delay_frequency": 2,
                "delay_tempo": 9,
            }
        },
    ],
    "modwheel": [
        {
            'label': 'standard',
            'modulations': [
                {
                    "source": "poly_lfo",
                    "destination": "osc_2_tune",
                    "amount": 1.2163750000000002061
                },
                {
                    "source": "poly_lfo",
                    "destination": "osc_1_tune",
                    "amount": 1.2186874999999997016
                },
                {
                    "source": "mod_wheel",
                    "destination": "poly_lfo_amplitude",
                    "amount": 2
                }
            ]
        }
    ]
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
