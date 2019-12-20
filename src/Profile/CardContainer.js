import React from 'react';
import Box from '@material-ui/core/Box';
import Card from './Card.js'

const CardContainer = ({listOfpersons})=>{

return (

<div className="cardsContainer" style={{ width: '100%' }}>
      <Box display="flex" flexDirection="row"  flexWrap="wrap" p={1} m={1} bgcolor="background.paper">
        {listOfpersons.map((person)=><Box><Card props={person}></Card></Box>)}
      </Box>
    </div>)

}

export default CardContainer;