import React from 'react';
import styles from '../components/Form/Form.scss'
import Input from '../components/Palette/PaletteComponenets/ComponentMetaData/Input'
import TextArea from '../components/Palette/PaletteComponenets/ComponentMetaData/TextArea'


export function getElement(fieldObj){
   let comp = ''
   let html = ''
   let css = ''
  if(fieldObj.field.indexOf('input') != -1||fieldObj.field.indexOf('textarea') != -1){
    let field = fieldObj.field.indexOf('input') != -1 ?
       <input id={fieldObj.id} type={fieldObj.type} placeholder={fieldObj.placeholder}/> :
       <textarea id={fieldObj.id} type={fieldObj.type} placeholder={fieldObj.placeholder}/>

    let display = fieldObj.labelPosition === 'top' ? 'block' : ''
    let style = {
      display : display
    }
     css = `.${fieldObj.css.className}{
        display : ${display}
     }`
     comp = <div>
              <div className={`form-group row`} >
                <label className='control-label' htmlFor='label' style={style}>{fieldObj.label}</label>
               {field}
              </div>
            </div>
     html = `<div>
              <div className="form-group row">
                <label className='control-label' htmlFor='label'>${fieldObj.label}</label>
                ${field}
              </div>
            </div>`

  } else if(fieldObj.field.indexOf('') != -1){
     let display = fieldObj.labelPosition === 'top' ? 'block' : ''
     let style = {
       display : display
     }
     css = `.${fieldObj.css.className}{
        display : ${display}
     }`
     comp = <div>
              <div className={`form-group row`} >
                <label className='control-label' htmlFor='label' style={style}>{fieldObj.label}</label>
               {field}
              </div>
            </div>
     html = `<div>
              <div className="form-group row">
                <label className='control-label' htmlFor='label'>${fieldObj.label}</label>
                ${field}
              </div>
            </div>`
  }
  return {
      element : comp,
      html : html,
      css : css,
    }
}

export function getMetaData(id){
  if(id.indexOf('input') != -1){
    return <Input/>
  } else if(id.indexOf('textarea') != -1){
    return <TextArea/>
  }
}
export function getDefaultData(field){
  if(field.indexOf('input') != -1 || field.indexOf('textarea') != -1){
    return {
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
      }
  }
}


