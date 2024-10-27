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
  const buttons = document.querySelectorAll('button[data-category]');
  const rows = document.querySelectorAll('[data-row]');

  // Get the initial category from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  activeCategory = (urlParams.get('category') || 'all').toLowerCase();

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      if (category) {
        activeCategory = category.toLowerCase();
        updateUI();
        updateURL(activeCategory);
      }
    });
  });

  function updateUI() {
    buttons.forEach(button => {
      const buttonCategory = button.getAttribute('data-category')?.toLowerCase();
      if (buttonCategory === activeCategory) {
        button.classList.add('category-active');
      } else {
        button.classList.remove('category-active');
      }
    });

    rows.forEach(row => {
      if (row instanceof HTMLElement) {
        const rowCategories = (row.getAttribute('data-categories')?.split(',') || [])
          .map(cat => cat.toLowerCase().trim());
        
        if (activeCategory === 'all' || rowCategories.includes(activeCategory)) {
          // Make visible
          row.classList.remove('row-hidden');
        } else {
          // Hide visually
          row.classList.add('row-hidden');
        }
      }
    });

    // Force layout recalculation to remove gaps
    requestAnimationFrame(() => {
      rows.forEach(row => {
        if (row instanceof HTMLElement) {
          row.style.transition = 'all 0.1s ease-in-out';
        }
      });
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
