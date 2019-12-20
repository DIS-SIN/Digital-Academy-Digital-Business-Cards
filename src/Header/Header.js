import React from 'react';
import './Header.css'

function Header() {
 
  return (
    <header class="w3-container header w3-padding" id="myHeader">
         <div class="w3-center w3-display-container" > 
            <h1 class="w3-xxxlarge w3-animate-zoom ">
               <b>
               <span class="en lang_term" lang="en">MEET THE CSPS DIGITAL ACADEMY</span> 
            </b>
         </h1>
            <div class=" w3-padding-4">
               <h4 class=' w3-xxlarge w3-animate-zoom'>
                  <span class="en lang_term" lang="en">Teaching public servants the digital skills, approaches and mindsets needed in today’s digital age.</span>
               </h4>
            </div>
         </div>
      </header>
  );
}

export default Header;
