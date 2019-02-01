module.exports = [
    {
        'label': 'flavor-0',
        'values': {},
        'modulations': [],
    },
    {
        'label': 'flavor-slow-unison-detune',
        'weight': 2,
        'values': {
            "osc_1_unison_detune": 0,
            "osc_1_unison_voices": 7,
            "osc_2_unison_detune": 0,
            "osc_2_unison_voices": 11,
            "mod_attack": 1.24,
            "mod_decay": 1.85,
            "mod_release": 1.5,
            "mod_sustain": 1,
        },
        "modulations": [
            {
              "source": "mod_envelope",
              "destination": "osc_2_unison_detune",
              "amount": 25
            },
            {
              "source": "mod_envelope",
              "destination": "osc_1_unison_detune",
              "amount": 21
            }
        ],
    },
    {
        'label': 'flavor-slow-unison-cutoff',
        'weight': 2,
        'values': {
            "mod_attack": 1.24,
            "mod_decay": 1.85,
            "mod_release": 1.5,
            "mod_sustain": 1,
        },
        "modulations": [
            {
                "source": "mod_envelope",
                "destination": "cutoff",
                "amount": 20
            }
        ],
    },
    {
        'label': 'flavor-slow-high-octaves',
        'weight': 1,
        'values': {
            "mod_attack": 1.24,
            "mod_decay": 1.85,
            "mod_release": 1.5,
            "mod_sustain": 1,
            "mono_lfo_1_waveform": 2,
            "mono_lfo_1_sync": 1,
            "mono_lfo_1_tempo": 9,
            "osc_2_volume": 0,
            "osc_2_transpose": 12,
        },
        "modulations": [
            {
                "source": "mono_lfo_1",
                "destination": "osc_2_transpose",
                "amount": 12
            },
            {
               "source": "mod_envelope",
                "destination": "osc_2_volume",
                "amount": 0.51678043404343587675
            }
        ],
    },
    {
        'label': 'flavor-slow-lfo-detune',
        'weight': 2,
        'values': {
            "mod_attack": 1.0,
            "mod_decay": 1.25,
            "mod_release": 1.5,
            "mod_sustain": 1,
            "osc_1_unison_detune": 0,
            "osc_1_unison_voices": 9,
            "osc_2_unison_detune": 0,
            "osc_2_unison_voices": 5,
            "mono_lfo_1_amplitude": 0,
            "mono_lfo_1_waveform": 0,
            "mono_lfo_1_sync": 1,
            "mono_lfo_1_tempo": 6,
        },
        "modulations": [
            {
              "source": "mono_lfo_1",
              "destination": "osc_2_unison_detune",
              "amount": 25
            },
            {
              "source": "mono_lfo_1",
              "destination": "osc_1_unison_detune",
              "amount": 21
            },
            {
               "source": "mod_envelope",
               "destination": "mono_lfo_1_amplitude",
               "amount": 1
            }
        ],
    },
    {
        'label': 'flavor-snap-detune',
        'weight': 2,
        'values': {
            "mod_attack": 0,
            "mod_decay": 0.23,
            "mod_release": 0.4,
            "mod_sustain": 0.1,
        },
        "modulations": [
            {
              "source": "mod_envelope",
              "destination": "osc_2_unison_detune",
              "amount": 50,
            },
            {
              "source": "mod_envelope",
              "destination": "osc_1_unison_detune",
              "amount": 75,
            }
        ],
    },
    {
        'label': 'flavor-delay-tweaking',
        'weight': 1,
        'values': {
            "mono_lfo_1_sync": 1,
            "mono_lfo_1_tempo": 5,
            "mono_lfo_1_waveform": 6,
            "delay_on": 1,
            "delay_dry_wet": 0.1,
            "delay_feedback": 0.17,
            "delay_frequency": 1.7,
        },
        "modulations": [
            {
                "source": "mono_lfo_1",
                "destination": "delay_tempo",
                "amount": -5
            }
        ],
    },
];
