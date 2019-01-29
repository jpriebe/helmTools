let helmSetting = require ('./helmSetting');
let helmSettingGroup = require ('./helmSettingGroup');

function helmGen (author, name, folder)
{
    let synth_version = '0.9.0';
    let license = 'Patch (c) by qub1t.  This patch is licensed under a Creative Commons Attribution 4.0 International License.  You should have received a copy of the license along with this work.  If not, see <http://creativecommons.org/licenses/by/4.0/>.';

    let settings = [
        new helmSetting ( "amp_attack", 0.0, 4.0, 0, 0.109545, 'ALWAYS', 1.0 ),
        new helmSetting ( "amp_decay", 0.0, 4.0, 0, 1.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "amp_release", 0.0, 4.0, 0, 0.3, 'ALWAYS', 1.0 ),
        new helmSetting ( "amp_sustain", 0.0, 1.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_frequency", -1.0, 4.0, 0, 2.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_gate", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_octaves", 1.0, 4.0, 4, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_pattern", 0.0, 4.0, 5, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_sync", 0.0, 3.0, 4, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "arp_tempo", 0.0, 11.0, 12, 9.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "beats_per_minute", 0.333333333, 5.0, 0, 2.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "cross_modulation", 0.0, 1.0, 0, 0.0, 'ONLYNONZERO', 1.0 ),
        new helmSetting ( "cutoff", 28.0, 127.0, 0, 80.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "delay_dry_wet", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "delay_feedback", -1.0, 1.0, 0, 0.4, 'ALWAYS', 1.0 ),
        new helmSetting ( "delay_frequency", -2.0, 5.0, 0, 2.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "delay_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "delay_sync", 0.0, 3.0, 4, 1.0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "delay_tempo", 0.0, 11.0, 12, 9.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "distortion_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "distortion_type", 0.0, 3.0, 4, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "distortion_drive", -30.0, 30.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "distortion_mix", 0.0, 1.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "fil_attack", 0.0, 4.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "fil_decay", 0.0, 4.0, 0, 1.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "fil_env_depth", -128.0, 128.0, 0, 0.0, 'ONLYNONZERO', 1.0 ),
        new helmSetting ( "fil_release", 0.0, 4.0, 0, 1.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "fil_sustain", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "filter_drive", -12, 20.0, 0, 0.0, 'ONLYNONZERO', 1.0 ),
        new helmSetting ( "filter_blend", 0.0, 2.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "filter_style", 0.0, 2.0, 3, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "filter_shelf", 0.0, 2.0, 3, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "filter_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "formant_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "formant_x", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "formant_y", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "keytrack", -1.0, 1.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "legato", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mod_attack", 0.0, 4.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mod_decay", 0.0, 4.0, 0, 1.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "mod_release", 0.0, 4.0, 0, 1.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "mod_sustain", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_1_amplitude", -1.0, 1.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_1_frequency", -7.0, 6.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_1_retrigger", 0.0, 2.0, 3, 2.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_1_sync", 0.0, 3.0, 4, 1.0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_1_tempo", 0.0, 11.0, 12, 6.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_1_waveform", 0.0, 12.0, 13, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_2_amplitude", -1.0, 1.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_2_frequency", -7.0, 6.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_2_retrigger", 0.0, 2.0, 3, 2.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_2_sync", 0.0, 3.0, 4, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_2_tempo", 0.0, 11.0, 12, 7.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "mono_lfo_2_waveform", 0.0, 12.0, 13, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "noise_volume", 0.0, 1.0, 0, 0.0, 'ONLYNONZERO', 1.0 ),
        new helmSetting ( "num_steps", 1.0, 32.0, 32, 8.0, 'NEVER', 0.0 ),
        new helmSetting ( "osc_1_transpose", -48.0, 48.0, 97, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "osc_1_tune", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "osc_1_unison_detune", 0.0, 100.0, 0, 10.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_1_unison_voices", 1.0, 15.0, 8, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_1_volume", 0.0, 1.0, 0, 0.5477225575, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_1_waveform", 0.0, 10.0, 11, 4.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_2_transpose", -48.0, 48.0, 97, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "osc_2_tune", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "osc_2_unison_detune", 0.0, 100.0, 0, 10.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_2_unison_voices", 1.0, 15.0, 8, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_2_volume", 0.0, 1.0, 0, 0.5477225575, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_2_waveform", 0.0, 10.0, 11, 4.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_feedback_amount", -1.0, 1.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "osc_feedback_transpose", -24.0, 24.0, 49, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "osc_feedback_tune", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "pitch_bend_range", 0.0, 48.0, 49, 2.0, 'ALWAYS', 1.0 ),
        // not perturbable, b/c we use it to add modwheel vibrato 
        new helmSetting ( "poly_lfo_amplitude", -1.0, 1.0, 0, 1.0, 'NEVER', 0.0 ),
        new helmSetting ( "poly_lfo_frequency", -7.0, 6.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "poly_lfo_sync", 0.0, 3.0, 4, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "poly_lfo_tempo", 0.0, 11.0, 12, 7.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "poly_lfo_waveform", 0.0, 12.0, 13, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "polyphony", 1.0, 32.0, 32, 4.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "portamento", -9.0, -1.0, 0, -7.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "portamento_type", 0.0, 2.0, 3, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "resonance", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "reverb_damping", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "reverb_dry_wet", 0.0, 1.0, 0, 0.5, 'ALWAYS', 1.0 ),
        new helmSetting ( "reverb_feedback", 0.8, 1.0, 0, 0.9, 'ALWAYS', 1.0 ),
        new helmSetting ( "reverb_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "step_frequency", -5.0, 6.0, 0, 2.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_00", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_01", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_02", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_03", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_04", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_05", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_06", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_07", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_08", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_09", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_10", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_11", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_12", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_13", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_14", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_15", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_16", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_17", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_18", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_19", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_20", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_21", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_22", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_23", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_24", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_25", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_26", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_27", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_28", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_29", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_30", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_seq_31", -1.0, 1.0, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_sequencer_retrigger", 0.0, 2.0, 3, 2.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_sequencer_sync", 0.0, 3.0, 4, 1.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_sequencer_tempo", 0.0, 11.0, 12, 7.0, 'NEVER', 0.0 ),
        new helmSetting ( "step_smoothing", 0.0, 0.5, 0, 0.0, 'NEVER', 0.0 ),
        new helmSetting ( "stutter_frequency", 0.0, 7.0, 0, 3.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_sync", 0.0, 3.0, 4, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_tempo", 6.0, 11.0, 6, 8.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_on", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_resample_frequency", -7.0, 4.0, 0, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_resample_sync", 0.0, 3.0, 4, 1.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_resample_tempo", 0.0, 11.0, 12, 6.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "stutter_softness", 0.0, 1.0, 0, 0.2, 'ALWAYS', 1.0 ),
        new helmSetting ( "sub_shuffle", 0.0, 1.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "sub_octave", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "sub_volume", 0.0, 1.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "sub_waveform", 0.0, 10.0, 11, 2.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "unison_1_harmonize", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "unison_2_harmonize", 0.0, 1.0, 2, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "velocity_track", -1.0, 1.0, 0, 0.0, 'ALWAYS', 1.0 ),
        new helmSetting ( "volume", 0.0, 1.4143, 0, 0.7071068, 'ALWAYS', 1.0 ),
    ];

    let lookup = {};

    for (var i = 0; i < settings.length; i++) {
        lookup[settings[i].getIdentifier ()] = settings[i];
    }

    let modulations = [];

    this.initPatch = function () {
        for (var i = 0; i < settings.length; i++)
        {
            let s = settings[i];
            s.initValue ();
        }
        modulations = [];
    };

    this.applySetting = function (identifier, value) {
        if (typeof lookup[identifier] === 'undefined') {
            throw new Error ('No setting found with identifier "' + identifier + '".');
        }
        lookup[identifier].setValue (value);
    };

    this.applyRandomSettingGroups = function () {
        let domains = helmSettingGroup.domains;

        for (var i = 0; i < domains.length; i++) {
            let d = domains[i];
            let sg = helmSettingGroup.selectSettingGroup (d);

            process.stdout.write (d + ": " + sg.label + "\n");

            if (typeof sg.values !== 'undefined') {
                let identifier = '';
                for (identifier in sg.values) {
                    this.applySetting (identifier, sg.values[identifier]);
                }
            }

            if (typeof sg.modulations !== 'undefined') {
                for (var j = 0; j < sg.modulations.length; j++) {
                    modulations.push (sg.modulations[j]);
                }
            }
        }
    };

    this.perturbValues = function (perturbFactor) {
        for (var i = 0; i < settings.length; i++)
        {
            let s = settings[i];
            s.perturbValue (perturbFactor);
        }
    };

    this.getPatchDefinition = function () {
        let o = {};
        for (var i = 0; i < settings.length; i++)
        {
            let s = settings[i];
            o[s.getIdentifier ()] = s.getCurrentValue ();
        }

        o['modulations'] = modulations;

        return {
            license: license,
            synth_version: synth_version,
            patch_name: name,
            folder_name: folder,
            author: author,
            settings: o,
        };

        return o;
    }

}

module.exports = helmGen
