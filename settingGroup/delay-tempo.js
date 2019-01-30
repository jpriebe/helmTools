let settingGroup = {
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
    "reverb": [
        {
            'label': 'reverb1',
            'weight': 20,
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.82,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb2',
            'weight': 20,
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.85,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb3',
            'weight': 20,
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.88,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb4',
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.90,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb5',
            'weight': 5,
            'values': {
                "reverb_damping": 0,
                "reverb_dry_wet": 0.5,
                "reverb_feedback": 0.90,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb6',
            'weight': 2,
            'values': {
                "reverb_damping": 0.25,
                "reverb_dry_wet": 0.25,
                "reverb_feedback": 0.96,
                "reverb_on": 1,
            }
        },
        {
            'label': 'reverb7',
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
            'label': 'vibrato',
            'values': {
                'poly_lfo_amplitude': 0,
                'poly_lfo_tempo': 8,
            },
            'modulations': [
                {
                    "source": "poly_lfo",
                    "destination": "osc_2_tune",
                    "amount": 0.4,
                },
                {
                    "source": "poly_lfo",
                    "destination": "osc_1_tune",
                    "amount": 0.4,
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
