module.exports = [
    {
        'label': 'femc-0',
        'values': {},
        'modulations': [],
    },
    {
        'label': 'femc-1',
        'weight': 2,
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": -40.0,
            }
        ],
    },
    {
        'label': 'femc-2',
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": -20.0,
            }
        ],
    },
    {
        'label': 'femc-3',
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": -10.0,
            }
        ],
    },
    {
        'label': 'femc-4',
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": -5.0,
            }
        ],
    },
    {
        'label': 'femc-5',
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": 5.0,
            }
        ],
    },
    {
        'label': 'femc-6',
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": 10.0,
            }
        ],
    },
    {
        'label': 'femc-7',
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": 20.0,
            }
        ],
    },
    {
        'label': 'femc-8',
        'weight': 2,
        'values': {},
        'modulations': [
            {
                "source": "fil_envelope",
                "destination": "cutoff",
                "amount": 40.0,
            }
        ],
    },
];
