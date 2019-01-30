module.exports = [
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
];
