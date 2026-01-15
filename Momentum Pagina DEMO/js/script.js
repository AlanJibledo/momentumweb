tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        "background-light": "#F8FAFC",
        "background-dark": "#0A0A0A",
        "accent-blue": "#3B82F6",
        "accent-purple": "#8B5CF6",
        "accent-silver": "#CBD5E1",
        "royal-purple": "#6D28D9",
        "deep-purple": "#4C1D95",
        "loader-primary": "#127da1", // Added for loading screen
      },
      fontFamily: {
        display: ["Playfair Display", "Epilogue", "serif"], // Added Epilogue
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
};

// Modal Logic
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Loading Screen Logic
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.transition = 'opacity 0.5s ease';
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500); // Wait for fade out
    }
  }, 4000); // 4 seconds delay
});
