

export const Header = 
 `

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


`