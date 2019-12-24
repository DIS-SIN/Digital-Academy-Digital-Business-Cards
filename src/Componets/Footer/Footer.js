import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'

import {
  faTwitter,
  faGithub,
  faLinkedinIn,

} from '@fortawesome/free-brands-svg-icons';



function Footer() {
 
  return (
     <footer className="w3-container w3-padding-32  w3-theme w3-center footer">
            <h4>Connect with us </h4>

            <div className="socialMediaIcons">
              <a href="mailto:csps.digitalacademy-academiedunumerique.efpc@canada.ca" ><FontAwesomeIcon className="icon" icon={faEnvelope}/></a>
              <a href="https://twitter.com/digiacademycan" ><FontAwesomeIcon className="icon" icon={faTwitter}/></a>
              <a href="https://github.com/DIS-SIN" ><FontAwesomeIcon className="icon" icon={faGithub}/></a>
              <a href="https://ca.linkedin.com/company/csps-digiacademy-acadenum-efpc" ><FontAwesomeIcon className="icon" icon={faLinkedinIn}/></a>
            </div>  
     </footer>

  );
}

export default Footer;
