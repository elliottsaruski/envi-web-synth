ENVI WEB BASS SYNTH

Scaffolded with React + Vite
created with use of the _Web Audio API_

## The idea

- Create an accessible web audio synth instance to generate bass patches
- Custom accessible User Interface
- Keyboard input, midi input, (eventually create a midi sequencer for mobile accessibility)
- User should have access to all properties of the synth displayed via knobs and sliders
- Focus: FM/AM bass synthesis, (1-2) osc for now
- User should be able to record, save, and send audio generated as audio file
- eventually plan to allow the user to save and load custom patches

## The User Interface

- each module below will be contained in its own card on the app interface - allowing the user to toggle each

- Choose from different wavetables:
  - Sine wave
  - Sawtooth wave
  - Square wave
  - Triangle wave
  - (I plan to create and implement custom wavetables for the user)

- Envelope:
  - Attack
  - Decay
  - Sustain
  - Release

- Mode:
  - Default
  - AM
  - FM

- Effects:
  - Filter:
    - options:
      - type:
        - lowpass 
        - highpass 
        - bandpass 
        - lowshelf 
        - peaking 
        - notch 
        - allpass
      - Q:
        - the sharpness of the phase transition at the center frequency. A larger value implies a sharper transition and a larger group delay.
      - frequency:
        - the frequency where the center of the phase transition occurs. Viewed another way, this is the frequency with maximal group delay.
      - gain:
        - Defaults to 0. The meaning of this option depends on the value of type. -- the boost, in dB, to be applied. If the value is negative, the frequencies are attenuated. This only applies to:
        - lowshelf
        - highshelf
        - peaking
    - WaveShaper:
      - non-linear distorter. used to add a warm feeling to the signal.
    - DynamicsCompressor
      - threshold
      - knee
      - ratio
      - reduction
      - Attack
      - Release
        

        


