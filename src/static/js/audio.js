// Lightweight WebAudio-based Morse tone generator
(function(){
  const context = new (window.AudioContext || window.webkitAudioContext)();
  const DIT_MS = 90; // base unit
  const DAH_MS = DIT_MS * 3;
  const INTRA_GAP = DIT_MS; // gap between dits/dahs in a letter
  const LETTER_GAP = DIT_MS * 3;
  const WORD_GAP = DIT_MS * 7;
  const FREQ = 650;

  function playTone(durationMs){
    return new Promise(resolve => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = FREQ;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.25, context.currentTime + 0.01);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      setTimeout(() => {
        gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.02);
        setTimeout(() => { oscillator.stop(); resolve(); }, 25);
      }, durationMs);
    });
  }

  function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

  async function playMorse(str){
    // str contains '.', '-', ' ', '/'
    for(const ch of str){
      if(ch === '.'){
        await playTone(DIT_MS);
        await sleep(INTRA_GAP);
      } else if(ch === '-'){
        await playTone(DAH_MS);
        await sleep(INTRA_GAP);
      } else if(ch === ' '){
        await sleep(LETTER_GAP);
      } else if(ch === '/'){
        await sleep(WORD_GAP);
      }
    }
  }

  window.morseAudio = { playMorse };
})();


