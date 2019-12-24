import React, { useState } from 'react';
import './App.css';
import Header from './Componets/Header/Header'
import usersData from './data/data.json'
import CardContainer from './Componets/Profile/CardContainer';
import Search from './Componets/Search/Search'
import Footer from './Componets/Footer/Footer'


const newLocal = usersData;
 var lists=newLocal
var copyOfPeople= [...lists];

function App() {
  const [people,setPeople]=useState(copyOfPeople)
  const findPerson = (query)=>{
   let newList=copyOfPeople.filter((person)=> {
     return (person.first_name.toLowerCase().startsWith(query.toLowerCase())) || (person.last_name.toLowerCase().startsWith(query.toLowerCase()))
    })
    console.log("the newList looks like this:"+newList);
    if(query===""){
      console.log("The query was empty")
      setPeople(lists)
    }
    else{
      console.log("the Query wasn't empty")
    setPeople(newList)
    }
  
  
  }
 
  return (
    <div className="App">
      <Header/>
     <CardContainer listOfpersons={people}/>
     <Footer/>
    </div>
  );
}

export default App;
