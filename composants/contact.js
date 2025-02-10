export const Contact =
`
<div id="Contact" class="mt-20 mb-20 pt-8 ">
  <h1 class="dark:text-gray-100 mb-16 text-5xl font-bold tracking-tight ">Contact</h1><!-- commented text-center for having the text at left instead of center-->
  <div id="block" class="flex justify-center items-center">
         <!--<form action="https://api.web3forms.com/submit" method="POST" class="w-full max-w-2xl lg:max-w-4xl"> this form is commented for removing captcha and to improve/change reponsivenes if needed switch back to it or it classes-->
    <form
  action="https://formspree.io/f/mvoejjvq"
  method="POST"
>
      <input type="hidden" name="access_key" value="ad73a3b2-ca2f-45bc-918a-5c642ff8ebf7" />
      
      <div class="dark:bg-zinc-900 bg-zinc-100 border-zinc-300 dark:border-zinc-700 border-solid border-2 p-4 rounded-xl shadow-lg">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-8 md:mb-0 p-4">
            <h1 class="text-3xl dark:text-gray-100 font-bold mb-4">Contact Me</h1>
            <p class="dark:text-gray-100 mb-6">Any questions or discussions? Just write me a message!</p>
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" autocomplete="given-name" placeholder="John" name="first-name" required class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input type="text" autocomplete="given-name" placeholder="Doe" name="last-name" class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="form-group mt-4">
              <input type="email" autocomplete="given-email" name="email" required placeholder="lucas@mail.com" class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="form-group mt-4">
              <textarea id="message" name="message" placeholder="Your Message" class="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
             
            <!-- <div class="h-captcha" data-captcha="true"></div>-->
            <button type="submit" class="form-submit bg-gray-900 dark:bg-gray-100 text-white dark:text-black font-medium px-6 py-2 rounded-md mt-4 dark:hover:bg-gray-300 hover:scale-110 transform transition-transform duration-300">SEND MESSAGE</button>
          </div>
    </form>
    <div class="md:w-1/2  bg-zinc-200 dark:bg-zinc-800 text-gray-900 dark:text-gray-100 p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
      <p class="mb-6">Fill up the form and send me your message or contact through below details</p>
      <div class="flex items-center mb-4">
        <i class="fas fa-phone mr-4"></i>
        <span>+91 9322360427</span>
      </div>
      <div class="flex items-center mb-4">
        <i class="fas fa-envelope mr-4"></i>
        <span>shivkolekar01@gmail.com</span>
      </div>
    <div class="mt-6 flex flex-row gap-5 ml-4">
     <a href="https://github.com/Shivaraj-Kolekar" aria-label="GitHub" class="dark:fill-white fill-black transition-transform hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shivaraj-kolekar-60b691213/" aria-label="LinkedIn" class="dark:fill-white  transition-transform hover:scale-150 fill-black">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/shiv__kolekar/" aria-label="Instagram" class="dark:fill-white transition-transform  fill-black hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" class="dark:fill-white transition-transform  fill-black hover:scale-150">
            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.23336 4.69629C7.23336 2.96884 8.63335 1.56857 10.36 1.56857C11.3736 1.56857 12.183 2.04804 12.7254 2.74385C13.3079 2.62467 13.8557 2.40913 14.3513 2.11508C14.1559 2.72598 13.7424 3.2396 13.2033 3.56463C13.2038 3.56568 13.2042 3.56674 13.2047 3.56779C13.7334 3.50361 14.2364 3.36302 14.7048 3.15546L14.7037 3.15715C14.3667 3.66183 13.9431 4.10736 13.4561 4.47034C13.4823 4.64672 13.4956 4.82427 13.4956 5.00079C13.4956 8.6871 10.6873 12.9746 5.52122 12.9746C3.93906 12.9746 2.46544 12.511 1.22505 11.7152C0.992632 11.5661 0.925108 11.2568 1.07423 11.0244C1.0874 11.0038 1.10183 10.9846 1.11734 10.9666C1.20582 10.8202 1.37438 10.7309 1.5554 10.7522C2.47066 10.8601 3.38568 10.7485 4.19219 10.3962C3.39226 10.0434 2.77129 9.35975 2.50204 8.51974C2.45359 8.3686 2.48835 8.20311 2.59351 8.08422C2.59716 8.0801 2.60087 8.07606 2.60464 8.0721C1.96391 7.50819 1.55973 6.68208 1.55973 5.76143V5.72759C1.55973 5.56814 1.64411 5.42059 1.78155 5.33974C1.82671 5.31317 1.87537 5.29511 1.92532 5.28558C1.70549 4.86154 1.58116 4.37984 1.58116 3.86958C1.58116 3.40165 1.58384 2.81192 1.91332 2.28081C1.98718 2.16175 2.10758 2.08915 2.2364 2.07195C2.42588 2.01237 2.64087 2.06969 2.77406 2.23302C3.86536 3.57126 5.44066 4.49583 7.23366 4.73961L7.23336 4.69629ZM5.52122 11.9746C4.73387 11.9746 3.97781 11.8435 3.27248 11.6023C4.13012 11.4538 4.95307 11.1159 5.66218 10.5602C5.81211 10.4427 5.87182 10.2435 5.81126 10.0629C5.7507 9.88234 5.583 9.75943 5.39255 9.75607C4.68968 9.74366 4.06712 9.39716 3.67793 8.86845C3.86828 8.85306 4.05428 8.82039 4.23445 8.77167C4.43603 8.71716 4.57363 8.53114 4.56674 8.32243C4.55985 8.11372 4.41029 7.93718 4.20555 7.89607C3.42694 7.73977 2.79883 7.16764 2.56169 6.42174C2.76255 6.47025 2.97102 6.4991 3.18482 6.5061C3.38563 6.51267 3.56646 6.38533 3.62795 6.19405C3.68943 6.00277 3.61666 5.79391 3.44963 5.68224C2.86523 5.29155 2.48116 4.62464 2.48116 3.86958C2.48116 3.70213 2.48352 3.55268 2.49355 3.41719C3.85115 4.79913 5.70873 5.68931 7.77588 5.79338C7.93225 5.80126 8.08328 5.73543 8.18395 5.61553C8.28463 5.49562 8.32332 5.33548 8.28851 5.18284C8.25255 5.02517 8.23336 4.86284 8.23336 4.69629C8.23336 3.52085 9.18591 2.56857 10.36 2.56857C11.5943 2.56857 12.4956 3.71208 12.4956 5.00079C12.4956 8.25709 10.0202 11.9746 5.52122 11.9746Z" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </a>
    </div>
    <div class="flex items-center ml-4 my-4">
    </div>
    <button class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-lg hover:bg-opacity-70 transition font-semibold shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
          <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
          <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Download">
              <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path>
            </g>
          </g>
        </svg><a href="https://drive.google.com/uc?export=download&id=1C0Dq-nIWa7fXolxBtpERYXiLbd2FCjr3">
        Resume</a>
        <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          <a href="https://drive.google.com/uc?export=download&id=1C0Dq-nIWa7fXolxBtpERYXiLbd2FCjr3">Resume</a>
        </div>
      </button>
      </div>
  </div>
</div>
</div>
`