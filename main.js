import './style.css';
import Typed from 'typed.js';
import { Hero } from './composants/hero.js';
import { Project } from './composants/project.js';
import { Skill } from './composants/skill.js';
import { Contact } from './composants/contact.js';


document.querySelector('#app').innerHTML = `
 
<div id="body" class="font-container px-4 sm:px-10 lg:px-20 bg-scroll">

  <main>
  
   <header>
  <nav class="text-white flex justify-between items-center py-6 px-0 ">
    <div class='flex gap-6'>
      <button data-text="Awesome" class="button1 dark:block hidden">
  <span class="actual-text">&nbsp;Shivaraj&nbsp;</span>
  <span class="hover-text1" aria-hidden="true">&nbsp;Shivaraj&nbsp;</span>
</button>
<button data-text="Awesome" class="button2 dark:hidden block">
  <span class="actual-text">&nbsp;Shivaraj&nbsp;</span>
  <span class="hover-text2" aria-hidden="true">&nbsp;Shivaraj&nbsp;</span>
</button>

    </div>
    <div id="menu"  class="hidden  md:flex duration-300 md:static md:min-h-fit lg:-ml-36 absolute min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex flex-col md:flex-row md:items-center py-6 md:px-4 md:py-3 rounded-bl-md rounded-br-md md:rounded-lg border-solid border-2 border-zinc-400 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900  ">
      <ul class="flex flex-col md:flex-row gap-6 font-mono md:items-center text-3xl align-middle justify-center md:bg-transparent px-6 rounded-full font-medium max-w-max ">
         <a href="/"
        class="text-2xl font-sans align-middle font-bold leading-6  p-3 hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Home</a>
      <a href="#Projects"
        class="text-2xl  font-sans p-3 align-middle font-bold leading-6  hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Projects</a>
      <a href="#Skills"
        class="text-2xl p-3 font-sans align-middle font-bold leading-6 hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Skills</a>
      <a href="#Contact"
        class="text-2xl p-3 font-sans align-middle font-bold leading-6  hover:white hover:bg-zinc-300  dark:hover:bg-zinc-800 rounded-md cursor-pointer text-gray-800 dark:text-gray-200">Contact</a>
      

      </ul>
    </div>
    <div class="flex items-center gap-6">
      <button name="light-dark-mode-toggle" id="theme-toggle" type="button" class="h-fit w-fit my-0 dark:text-white text-gray-500 hover:scale-110 transition-transform transform hover:bg-zinc-200 bg-zinc-100 dark:hover:bg-zinc-600 dark:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <svg id="theme-toggle-dark-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg id="theme-toggle-light-icon" class="hidden w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
      <ion-icon id="toggle-menu-button" name="menu" class="w-7 h-7 dark:bg-zinc-800  p-2.5 rounded-lg cursor-pointer md:hidden text-gray-500 dark:text-gray-400 hover:scale-110 transition-transform transform hover:bg-zinc-200 bg-zinc-300 dark:hover:bg-zinc-600  "></ion-icon>
    </div>
  </nav>
</header>

    

   ${Hero}


  ${Project}

  ${Skill}

   
  ${Contact}



</main>

<div>
<p class="dark:text-gray-100 font-semibold p-6 text-2xl flex justify-center tracking-tight">Portfolio Developed by Shivaraj</p>
<p class="dark:text-gray-100 font-semibold pb-20 text-2xl items-center flex justify-center tracking-tight"><a href="https://github.com/Shivaraj-Kolekar/portfolio.git" class="bg-gray-900  items-center hover:scale-110 transition-transform transform dark:bg-gray-100 text-white dark:text-black flex gap-2 p-3 rounded-md font-medium ml-5">Source Code
                <svg class="fill-white dark:fill-black" width="22" height="22" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </a></p>
</div>

</div>



`
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  themeToggleLightIcon.classList.remove('hidden')
} else {
  themeToggleDarkIcon.classList.remove('hidden')
}

var themeToggleBtn = document.getElementById('theme-toggle')

themeToggleBtn.addEventListener('click', function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden')
  themeToggleLightIcon.classList.toggle('hidden')

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
})
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
  backSpeed: 40,
  typeSpeed: 60
})
/*
document
  .getElementById('toggle-menu-button')
  .addEventListener('click', function () {
    var menu = document.getElementById('menu')
    if (menu.style.top === '0px') {
      menu.style.top = '-100%'
    } else {
      menu.style.top = '0px'
    }
  })*/
const toggleMenuButton = document.getElementById('toggle-menu-button')
const menu = document.getElementById('menu')

toggleMenuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
});
