import React from 'react';

export function getElement(field){
   let comp = ''
  if(field === 'input'){
     comp = <input></input>
  }
  return comp;
}
