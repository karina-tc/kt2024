document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.group-button');
  const sections = document.querySelectorAll('.section-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));
      
      // Show selected section
      const sectionId = button.getAttribute('data-section');
      if (sectionId) {
        const targetSection = document.getElementById(sectionId);
        targetSection?.classList.remove('hidden');
      }
    });
  });
});
