export function getDataTemplate(){
  return (
   { data: {
     fields:[]
  }
})
}

export function getLayoutTemplate(){
  return (
    {layout:{
      rows : []
    //   row : {
    //     id: 1,
    //     css:{
    //      className : 'sample-class',
    //      value:{
    //         }
    //    },
    //     row: {
    //       id: 2,
    //       css:{
    //         className : 'sample-class',
    //         value:{
    //         }
    //       }
    //     },
    // }
  }
})
}
export function getFieldData(field){
  if(!field.indexOf('input') == -1||!field.indexOf('textarea') == -1){
    return({
         field : field,
         id : '',
         label : 'Sample Label',
         labelPosition: 'top',
         isRequired : true,
         placeholder: 'Enter text value',
         instruction : 'enter text',
         value : 'sample value',
         type : 'text',
         css:{
           className : 'sample-class',
           value:{
              }
         }
       })
   }
}
export function getRowTemplate(){
  return(
    {row: {
          id: '',
          css:{
            className : 'sample-class',
            value:{
            }
          }
        }
    }
  );
}
