import confetti from 'canvas-confetti';

export function initConfetti() {
  document.querySelectorAll('[data-confetti]').forEach(element => {
    element.addEventListener('click', (e) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x, y },
        colors: ['#ffffff', '#f0f0f0', '#e0e0e0'],
        disableForReducedMotion: true,
        scalar: 0.7,
        gravity: 1.2,
        ticks: 150
      });
    });
  });
}
