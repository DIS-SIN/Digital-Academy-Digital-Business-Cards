import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare,faEnvelope } from '@fortawesome/fontawesome-free-solid'
import Img from 'react-image'
import './Card.css'
 

import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';



const Card = ({props}) =>{

  let renderIcons =(props)=>{
    let icons=[];
    let phone_number= <a href={props.phone_number}id="phone_number " aria-label="user email"><FontAwesomeIcon icon={faPhoneSquare}></FontAwesomeIcon></a> ;
    let email= <a href={props.email} id="email" aria-label="user email"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>;
      icons.push(phone_number,email);
    if(props.github){
      let github= <a href={props.github} target="_blank" id='twitter'> <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a> 
        icons.push(github);
    }

    if(props.twitter){
      let twitter=<a href={props.twitter} target="_blank" id='twitter'> <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></a> 
       icons.push(twitter);
    }

    if(props.linkedin){
      let linkedin=<a href={props.linkedin} target="_blank" id='twitter'> <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a> 
        icons.push(linkedin);
    }
   return <React.Fragment>
      {icons}</React.Fragment>
  }

  let renderImage=(props)=>{
    if(props.profile_pic){
      let picSrc=props.profile_pic;
      console.log(picSrc)
      return <img src={picSrc} alt={"Image of "+ props.first_name + " "+ props.last_name } id='profile_pic'/>
    }
    else{
      return <img src='https://pbs.twimg.com/profile_images/1083069803236073472/oJzQVirc_400x400.jpg' id='profile_pic' alt="Profile picture" />

    }

  }

  
    return( 
    <div className="Card">
      {renderImage(props)}
      <h1>{props.first_name +" "+ props.last_name}</h1>
      <p>{props.role}</p>
      {renderIcons(props)}
      <br></br>
      <a class='contact w3-hover-shadow' href="https://www.csps-efpc.gc.ca/About_us/Business_lines/digitalacademy-eng.aspx" target="_blank">Digital Academy</a>
        </div>
      
    )
        
}

export default Card;