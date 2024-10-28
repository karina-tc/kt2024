export class TabSwitcher {
  private buttons: NodeListOf<Element>;
  private sections: NodeListOf<Element>;
  private static currentTab: string = 'humanity'; // Default tab

  constructor() {
    this.buttons = document.querySelectorAll('[data-section]');
    this.sections = document.querySelectorAll('.section-content');
    this.init();
    this.switchTab(TabSwitcher.currentTab);
  }

  private init(): void {
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('[data-section]');
      
      if (button) {
        e.preventDefault();
        const sectionId = button.getAttribute('data-section');
        if (sectionId) {
          TabSwitcher.currentTab = sectionId;
          this.switchTab(sectionId);
        }
      }
    });
  }

  private switchTab(sectionId: string): void {
    // Update button states
    this.buttons.forEach(btn => {
      btn.classList.toggle('activate', btn.getAttribute('data-section') === sectionId);
    });

    // Update section visibility - simple display toggle
    this.sections.forEach(section => {
      section.classList.toggle('hidden', section.id !== sectionId);
    });
  }
}

let tabSwitcher: TabSwitcher;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  tabSwitcher = new TabSwitcher();
});

// Handle Astro page transitions
document.addEventListener('astro:after-swap', () => {
  tabSwitcher = new TabSwitcher();
});
