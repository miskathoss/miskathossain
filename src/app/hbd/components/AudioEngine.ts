// Web Audio API ambient music synthesizer & procedural sound effects for Rimty's Birthday
// 100% self-contained, no external audio loading required, instant playback!

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlayingMusic = false;
  private musicInterval: number | null = null;
  private customAudio: HTMLAudioElement | null = null;
  private isMuted = false;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Play romantic ambient piano / pad chords in a loop
  public toggleMusic(forceState?: boolean): boolean {
    this.initCtx();
    const targetState = forceState !== undefined ? forceState : !this.isPlayingMusic;

    if (targetState) {
      this.startMusic();
    } else {
      this.stopMusic();
    }
    return this.isPlayingMusic;
  }

  public getMusicState(): boolean {
    return this.isPlayingMusic;
  }

  private startMusic() {
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;

    // Check if custom mp3 exists
    if (!this.customAudio && typeof window !== "undefined") {
      const audio = new Audio("/hbd/music.mp3");
      audio.loop = true;
      audio.volume = 0.5;
      
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.customAudio = audio;
          })
          .catch(() => {
            // Fallback to Web Audio synthesized romantic ambient chords
            this.startSynthesizedAmbient();
          });
      } else {
        this.startSynthesizedAmbient();
      }
    } else if (this.customAudio) {
      this.customAudio.play().catch(() => this.startSynthesizedAmbient());
    } else {
      this.startSynthesizedAmbient();
    }
  }

  private stopMusic() {
    this.isPlayingMusic = false;
    if (this.customAudio) {
      this.customAudio.pause();
    }
    if (this.musicInterval) {
      window.clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  // Synthesizes dreamy, romantic piano chords & warm pads: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4
  private startSynthesizedAmbient() {
    if (this.musicInterval) return;

    // Chord progressions in Hz
    const chords = [
      [261.63, 329.63, 392.0, 493.88, 587.33], // Cmaj9 (C4, E4, G4, B4, D5)
      [220.0, 261.63, 329.63, 392.0, 493.88],  // Am9 (A3, C4, E4, G4, B4)
      [174.61, 261.63, 329.63, 392.0, 440.0],  // Fmaj9 (F3, C4, E4, G4, A4)
      [196.0, 261.63, 293.66, 392.0, 493.88],  // Gsus4 / Gadd9
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlayingMusic || !this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = chords[chordIdx % chords.length];
      chordIdx++;

      notes.forEach((freq, i) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Warm sine + subtle triangle blend
        osc.type = i % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.18);

        // Soft romantic attack and long decay
        const noteStart = now + i * 0.18;
        const noteDuration = 4.2;

        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.035, noteStart + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteStart + noteDuration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + noteDuration);
      });
    };

    playChord();
    this.musicInterval = window.setInterval(playChord, 3800);
  }

  // Procedural Sound Effects
  public playChime() {
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.51]; // C5, E5, G5, C6, E6

    freqs.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);

      const start = now + idx * 0.07;
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(0.06, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(start);
      osc.stop(start + 0.95);
    });
  }

  public playPop() {
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.12);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.16);
  }

  public playBlow() {
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Filtered noise for gentle wind/blow breath
    const bufferSize = this.ctx.sampleRate * 0.6;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(200, now + 0.5);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.exponentialRampToValueAtTime(0.1, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 0.6);
  }

  public playFirework() {
    this.playPop();
    setTimeout(() => {
      this.playChime();
    }, 150);
  }
}

export const soundEngine = new SoundEngine();
