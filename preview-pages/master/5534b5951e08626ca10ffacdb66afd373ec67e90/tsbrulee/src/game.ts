// game.ts
interface GameSounds {
  woosh: HTMLAudioElement;
  steadyFire: HTMLAudioElement;
  hiss: HTMLAudioElement;
  ovenDing: HTMLAudioElement;
  flameBurst: HTMLAudioElement;
}

interface GameElements {
  bruleeButton: HTMLButtonElement;
  bruleeUncooked: HTMLImageElement;
  bruleePartial: HTMLImageElement;
  resultMessage: HTMLParagraphElement;
}

class BruleeGame {
  private readonly perfectTime: number;
  private readonly perfectWindow: number = 300;
  private readonly sounds: GameSounds;
  private readonly elements: GameElements;
  
  private startTime: number = 0;
  private holdTime: number = 0;
  private gameEnded: boolean = false;
  private checkInterval: number | null = null;
  private audioContext: AudioContext | null = null;
  private soundBuffers: Map<string, AudioBuffer> = new Map();

  constructor() {
    this.perfectTime = 2000 + Math.random() * 3000;
    this.elements = this.initializeElements();
    this.sounds = this.initializeSounds();
    this.setupEventListeners();
    this.initializeAudioContext();
  }

  private initializeElements(): GameElements {
    return {
      bruleeButton: document.getElementById('brulee-button') as HTMLButtonElement,
      bruleeUncooked: document.getElementById('brulee-uncooked') as HTMLImageElement,
      bruleePartial: document.getElementById('brulee-partial') as HTMLImageElement,
      resultMessage: document.getElementById('result-message') as HTMLParagraphElement
    };
  }

  private initializeSounds(): GameSounds {
    const createAudio = (src: string): HTMLAudioElement => {
      const audio = new Audio(src);
      audio.load();
      return audio;
    };

    return {
      woosh: createAudio('sfx/burning-woosh.mp3'),
      steadyFire: createAudio('sfx/steady-fire.mp3'),
      hiss: createAudio('sfx/hiss.mp3'),
      ovenDing: createAudio('sfx/oven-ding.mp3'),
      flameBurst: createAudio('sfx/flame-burst.mp3')
    };
  }

  private async initializeAudioContext(): Promise<void> {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const soundFiles = [
      ['woosh', 'sfx/burning-woosh.mp3'],
      ['steadyFire', 'sfx/steady-fire.mp3'],
      ['hiss', 'sfx/hiss.mp3'],
      ['ovenDing', 'sfx/oven-ding.mp3'],
      ['flameBurst', 'sfx/flame-burst.mp3']
    ];

    for (const [name, file] of soundFiles) {
      try {
        const response = await fetch(file);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.soundBuffers.set(name, audioBuffer);
      } catch (error) {
        console.error(`Error loading sound ${name}:`, error);
      }
    }
  }

  private async playSound(soundName: keyof GameSounds): Promise<void> {
    if (!this.audioContext || this.audioContext.state === 'suspended') {
      await this.audioContext?.resume();
    }

    const buffer = this.soundBuffers.get(soundName);
    if (buffer && this.audioContext) {
      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(this.audioContext.destination);
      
      if (soundName === 'steadyFire') {
        source.loop = true;
      }
      
      source.start(0);
      return new Promise(resolve => {
        source.onended = () => resolve();
      });
    }
  }

  private stopSound(soundName: keyof GameSounds): void {
    if (this.audioContext) {
      // Implementation will stop the specific sound source
      this.sounds[soundName].pause();
      this.sounds[soundName].currentTime = 0;
    }
  }

  private quadraticFade(elapsed: number): void {
    const maxOpacity = 0.85;
    const progress = Math.min(elapsed / this.perfectTime, 1);
    const opacity = (1 - Math.pow(1 - progress, 2)) * maxOpacity;
    console.log('Opacity:', opacity);
    this.elements.bruleePartial.style.opacity = opacity.toString();
}

  private updateImageWhileHolding(currentTime: number): void {
    const timeHeld = currentTime - this.startTime;

    if (timeHeld < this.perfectTime) {
      this.quadraticFade(timeHeld);
    } else if (timeHeld >= this.perfectTime && timeHeld <= this.perfectTime + this.perfectWindow) {
      this.elements.bruleePartial.src = 'art/perfect-sear.png';
      this.elements.bruleePartial.style.opacity = '1';
    } else {
      this.elements.bruleePartial.src = 'art/burnt.png';
      this.elements.bruleePartial.style.opacity = '1';
    }
  }

  private async playReleaseSound(timeHeld: number): Promise<void> {
    this.stopSound('steadyFire');
    this.stopSound('woosh');

    await new Promise(resolve => setTimeout(resolve, 100));

    if (timeHeld < this.perfectTime) {
      await this.playSound('flameBurst');
    } else if (timeHeld >= this.perfectTime && timeHeld <= this.perfectTime + this.perfectWindow) {
      await this.playSound('ovenDing');
    } else {
      await this.playSound('hiss');
    }
  }

  private endGame(timeHeld: number): void {
    this.gameEnded = true;
    this.elements.bruleeButton.disabled = true;
    if (this.checkInterval) clearInterval(this.checkInterval);

    const timeInSeconds = (timeHeld / 1000).toFixed(3);

    if (timeHeld >= this.perfectTime && timeHeld <= this.perfectTime + this.perfectWindow) {
      this.elements.resultMessage.textContent = `Perfect sear! You held for ${timeInSeconds} seconds. Refresh to try again!`;
    } else if (timeHeld < this.perfectTime) {
      this.elements.resultMessage.textContent = `Too soon! Held for ${timeInSeconds} seconds. Refresh to try again!`;
    } else {
      this.elements.resultMessage.textContent = `Burnt! Held for ${timeInSeconds} seconds. Refresh to try again!`;
    }
  }

  private startHolding = async (): Promise<void> => {
    console.log('startHolding called');
    if (this.gameEnded) return;
    console.log('game not ended');
    
    this.startTime = performance.now();
    console.log('startTime:', this.startTime);
    
    this.checkInterval = window.setInterval(() => {
        console.log('interval tick');
        const currentTime = performance.now();
        this.updateImageWhileHolding(currentTime);
    }, 50);
    if (this.gameEnded) return;
  };

  private stopHolding = async (): Promise<void> => {
    if (this.gameEnded) return;
    this.holdTime = performance.now() - this.startTime;
    
    await this.playReleaseSound(this.holdTime);
    this.updateImageWhileHolding(performance.now());
    this.endGame(this.holdTime);
  };

  private setupEventListeners(): void {
    console.log('Setting up event listeners');
    this.elements.bruleeButton.addEventListener('mousedown', (e) => {
      console.log('mousedown triggered');
      this.startHolding();
    });
    this.elements.bruleeButton.addEventListener('mouseup', (e) => {
      console.log('mouseup triggered');
      this.stopHolding();
    });
    this.elements.bruleeButton.addEventListener('touchstart', (e: TouchEvent) => {
      console.log('touchstart triggered');
      e.preventDefault();
      this.startHolding();
    });
    this.elements.bruleeButton.addEventListener('touchend', (e: TouchEvent) => {
      console.log('touchend triggered');
      e.preventDefault();
      this.stopHolding();
    });
  }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, creating game');
  new BruleeGame();
});