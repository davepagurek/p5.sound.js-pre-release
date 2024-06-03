//import audioContext from './AudioContext';
//p5.prototype.getAudioContext = audioContext.getAudioContext;

import Oscillator from './Oscillator';
p5.prototype.Oscillator = Oscillator;

import Envelope from './Envelope';
p5.prototype.Envelope = Envelope;

import Delay from './Delay';
p5.prototype.Delay = Delay;

import Reverb from './Reverb';
p5.prototype.Reverb = Reverb;

import Biquad from './Biquad';
p5.prototype.Biquad = Biquad;

import Amplitude from './Amplitude';
p5.prototype.Amplitude = Amplitude;

import SawOsc from './Oscillator';
p5.prototype.SawOsc = SawOsc;
/*
import SinOsc from './Oscillator';
p5.prototype.SinOsc = SinOsc;

import TriOsc from './Oscillator';
p5.prototype.TriOsc = TriOsc;

import SqrOsc from './Oscillator';
p5.prototype.SqrOsc = SqrOsc;
*/

import Noise from './Noise';
p5.prototype.Noise = Noise;

import Panner from './Panner';
p5.prototype.Panner = Panner;

import Panner3D from './Panner3D';
p5.prototype.Panner3D = Panner3D;

import SoundFile, { loadSound } from './SoundFile';
p5.prototype.SoundFile = SoundFile;

p5.prototype.loadSound = loadSound;
p5.prototype.registerPreloadMethod('loadSound', p5.prototype);

import AudioIn from './AudioIn';
p5.prototype.AudioIn = AudioIn;
