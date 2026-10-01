// Audio engine playing Miskat's custom birthday song for Rimty ("শুভ জন্মদিন রিমতি")

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlayingMusic = false;
  private customAudio: HTMLAudioElement | null = null;

  private initCtx() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

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

    if (typeof window !== "undefined") {
      if (!this.customAudio) {
        const audio = new Audio("/hbd/song.m4a");
        audio.loop = true;
        audio.volume = 0.9;

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.customAudio = audio;
            })
            .catch((err) => {
              console.warn("Audio autoplay pending user gesture:", err);
            });
        }
        this.customAudio = audio;
      } else {
        this.customAudio.play().catch((err) => console.warn(err));
      }
    }
  }

  private stopMusic() {
    this.isPlayingMusic = false;
    if (this.customAudio) {
      this.customAudio.pause();
    }
  }

  // Procedural Sound Effects for Interactions
  public playChime() {
    this.initCtx();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.51];

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
