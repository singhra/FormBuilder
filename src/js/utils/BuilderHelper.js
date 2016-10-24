import React from 'react';
import styles from '../components/Form/Form.scss'
import Input from '../components/Palette/PaletteComponenets/ComponentMetaData/Input'
import TextArea from '../components/Palette/PaletteComponenets/ComponentMetaData/TextArea'


export function getElement(fieldObj){
   let comp = ''
   let html = ''
   let css = ''
  if(fieldObj.field.indexOf('input') != -1){
    let display = fieldObj.labelPosition === 'top' ? '' : 'flex'
    let style = {
      display : display
    }
     css = `.${fieldObj.css.className}{
        display : ${display}
     }`
     comp = <div>
              <div className={`form-group row`} >
                <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 ${styles['field-row']}`} style={style}>
                  <label className={fieldObj.isRequired ? "control-label required" : "control-label"}  htmlFor='label'>{fieldObj.label}</label>
                 <input className="form-control"
                       id={fieldObj.id}
                       type={fieldObj.type}
                       placeholder={fieldObj.placeholder}
                       required={fieldObj.isRequired}/>
                 {fieldObj.instruction ?
                  <p className={styles['note-class']}>{fieldObj.instruction}</p> : null}
                 </div>
              </div>
            </div>
     html = `<div>
              <div className="form-group row">
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <label className='control-label' htmlFor='label'>${fieldObj.label}</label>
                 <input className="form-control"
                       id=${fieldObj.id}
                       type=${fieldObj.type}
                       placeholder=${fieldObj.placeholder}
                       required=${fieldObj.isRequired}/>
                </div>
              </div>
            </div>`

  } else if(fieldObj.field.indexOf('textarea') != -1){
    let display = fieldObj.labelPosition === 'top' ? '' : 'flex'
    let style = {
      display : display
    }
     css = `.${fieldObj.css.className}{
        display : ${display}
     }`
     comp = <div>
              <div className={`form-group row`} >
                <div className={`col-lg-12 col-md-12 col-sm-12 col-xs-12 ${styles['field-row']}`} style={style}>
                  <label className={fieldObj.isRequired ? "control-label required" : "control-label"}  htmlFor='label'>{fieldObj.label}</label>
                 <textArea className="form-control"
                       id={fieldObj.id}
                       type={fieldObj.type}
                       placeholder={fieldObj.placeholder}
                       required={fieldObj.isRequired}/>
                 {fieldObj.instruction ?
                  <p className={styles['note-class']}>{fieldObj.instruction}</p> : null}
                 </div>
              </div>
            </div>
     html = `<code>
              <div className="form-group row">
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                <label className='control-label' htmlFor='label'>${fieldObj.label}</label>
                 <textArea className="form-control"
                       id=${fieldObj.id}
                       type=${fieldObj.type}
                       placeholder=${fieldObj.placeholder}
                       required=${fieldObj.isRequired}/>
                </div>
              </div>
            </code>`

  }
  return {
      element : comp,
      html : html,
      css : css,
    }
}

export function getMetaData(field,key,event){
    let fieldType = field.metadata.field
    if(fieldType.indexOf('input') != -1){
      return <Input fieldKey={key} metadata={field}/>
    } else if(fieldType.indexOf('textarea') != -1){
      return <TextArea fieldKey={key} metadata={field}/>
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
        instruction : '',
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


