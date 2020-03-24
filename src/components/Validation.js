import React from 'react';

const validation = (props)=> {
   let ValidationMessage = "Text too short";

   if(props.inputLength > 5){
       ValidationMessage = "Text long enough ";
   }
    return <div>{
       <p> { ValidationMessage } </p>

        }
    </div> 
};

export default validation;