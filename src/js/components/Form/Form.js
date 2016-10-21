import React from 'react';
import BuilderHelper from '../../utils/BuilderHelper'
import {UploadIcon} from '../SVGIconComp/SvgIcons'
import styles from './Form.scss'
// import field_styles from '../Palette/PaletteComponenets/ComponentsToDND/ComponentsLayout.scss'

export default class Form extends React.Component {

   constructor(props){
    super(props)
    this.state={
      element : ''
    }
   }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        console.log(data)
        var newElement = "";
        switch(data){
          case 'input-field': newElement = "<div class=\"fields\">Input</div>"; break;
          case 'textarea-field': newElement = "<div class=\"fields\">TextArea</div>"; break;
          case 'dropdown-field': newElement = "<div class=\"fields\">Drop Down</div>"; break;
          case 'checkbox-field': newElement = "<div class=\"fields\">Checkbox</div>"; break;
          case 'radio-field': newElement = "<div class=\"fields\">Radio</div>"; break;
          case 'upload-field': newElement = "<div class=\"fields\">File Upload</div>"; break;
          case 'tags-field': newElement = "<div class=\"fields\">Tags</div>"; break;
          case 'datepicker-field': newElement = "<div class=\"fields\">Date Picker</div>"; break;
        }
        document.getElementById("drawing-div").innerHTML += newElement;

    }

   componentWillReceiveProps(nextProps){
    this.setState({
      element : nextProps.element
    })
   }

   render() {
      return (
         <div className={styles['form-parent']}>
          <div className={styles['upload-button-wrapper']}>
            <button className={`btn btn-primary ${styles['upload-button']}`}>Import Existing Form HTML
              <UploadIcon fill1='none' fill2='white' height={36}/>
            </button>
            <div className={styles['drag-text-div']}>
             <span>OR</span>
              <span>Add Fields by dragging from the left panel</span>
            </div>
          </div>
           <div id="drawing-div" className={styles['drawing-div']} onDrop={this.drop.bind(event)} onDragOver={this.allowDrop.bind(event)}>
           </div>
         </div>
      );
   }
}

