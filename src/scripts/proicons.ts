// Declare the proicons type on window
declare global {
  interface Window {
    proicons: {
      replace: () => void;
    };
  }
}

export function loadProIcons() {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/proicons';
  script.onload = () => {
    window.proicons.replace();
  };
  document.head.appendChild(script);
}

