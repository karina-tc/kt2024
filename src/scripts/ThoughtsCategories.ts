let activeCategory = 'all';

function setupDimming() {
  const rows = document.querySelectorAll('[data-row]');
  
  rows.forEach(row => {
    let hoverTimer: ReturnType<typeof setTimeout>;

    row.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        rows.forEach(otherRow => {
          if (otherRow !== row) {
            otherRow.classList.add('opacity-50');
          }
        });
      }, 200);
    });

    row.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      rows.forEach(otherRow => {
        otherRow.classList.remove('opacity-50');
      });
    });
  });
}

function updateActiveCategory() {
  const buttons = document.querySelectorAll('.category-button');
  const rows = document.querySelectorAll('[data-row]');

  // Get the initial category from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  activeCategory = urlParams.get('category') || 'all';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      if (category) {
        activeCategory = category;
        updateUI();
        updateURL(category);
      }
    });
  });

  function updateUI() {
    buttons.forEach(button => {
      button.classList.toggle('active', button.getAttribute('data-category') === activeCategory);
    });

    rows.forEach(row => {
      const rowCategories = row.getAttribute('data-categories')?.split(',') || [];
      if (row instanceof HTMLElement) {
        row.style.display = (activeCategory === 'all' || rowCategories.includes(activeCategory)) ? 'flex' : 'none';
      }
    });
  }

  function updateURL(category: string) {
    const url = new URL(window.location.href);
    if (category === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', category);
    }
    history.pushState({}, '', url);
  }

  // Initial UI update
  updateUI();
}

// Initialize everything
function init() {
  updateActiveCategory();
  setupDimming();
}

// Run on initial load
document.addEventListener('DOMContentLoaded', init);

// Run on view transitions
document.addEventListener('astro:after-swap', init);

