# helmTools
Tools for generating and manipulating patches for the helm synth vst

## Sample commands

Generate a set of 64 patches selecting patch settings randomly from the built-in settings groups.

```
./helmTools generate \
  -a qub1t \
  -n 64 \
  -p ~/Library/Audio/Presets/Helm \
  -b ht \
  -P ht \
  -f 0.2
```

Generate hybrid patches using the settings found in the patches in ~/Library/Audio/Presets/Helm/qub1t\ patches/plucks

```
./helmTools hybridize \
  -a qub1t \
  -n 64 \
  -p ~/Library/Audio/Presets/Helm \
  -b ht \
  -P ht \
  ~/Library/Audio/Presets/Helm/qub1t\ patches/plucks/*.helm
```
