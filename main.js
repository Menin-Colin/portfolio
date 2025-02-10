import './style.css';
import Typed from 'typed.js';

function loadHTML(filePath) {
  return fetch(filePath)
    .then(response => response.text())
    .then(data => data)
    .catch(error => console.error('Error loading HTML:', error));
}

async function loadComponents() {
  const heroHTML = await loadHTML('./composants/hero.html');
  const projectHTML = await loadHTML('./composants/project.html');
  const skillHTML = await loadHTML('./composants/skill.html');
  const contactHTML = await loadHTML('./composants/contact.html');
  const headerHTML = await loadHTML('./composants/header.html');


  document.querySelector('#app').innerHTML = `
    <div id="body" class="font-container px-4 sm:px-10 lg:px-20 bg-scroll">
      <main>
        ${headerHTML}
        ${heroHTML}
        ${projectHTML}
        ${skillHTML}
        ${contactHTML}
      </main>

 
  `;

  // Gestion du mode sombre
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  const isDarkMode = localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

  document.documentElement.classList.toggle('dark', isDarkMode);
  lightIcon.classList.toggle('hidden', !isDarkMode);
  darkIcon.classList.toggle('hidden', isDarkMode);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
    darkIcon.classList.toggle('hidden', isDark);
    lightIcon.classList.toggle('hidden', !isDark);
  });

  // Animation Typed.js
  if (document.getElementById('typed')) {
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      backSpeed: 40,
      typeSpeed: 60
    });
  }

  // Menu responsive
  const toggleMenuButton = document.getElementById('toggle-menu-button');
  const menu = document.getElementById('menu');

  toggleMenuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

loadComponents();