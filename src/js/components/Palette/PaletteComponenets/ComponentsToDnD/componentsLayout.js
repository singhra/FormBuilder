import React from 'react';
import styles from './ComponentsLayout.scss'
import * as BuilderHelper from '../../../../utils/BuilderHelper'
import Input from '../ComponentMetaData/Input'
import TextArea from '../ComponentMetaData/TextArea'
import Checkbox from '../ComponentMetaData/Checkbox'
import DropDown from '../ComponentMetaData/DropDown'
import FileUpload from '../ComponentMetaData/FileUpload'
import Radio from '../ComponentMetaData/Radio'
import Tags from '../ComponentMetaData/Tags'
import DatePicker from '../ComponentMetaData/DatePicker'


export default class ComponentsLayout extends React.Component {

constructor(props){
  super(props)
}

drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


render() {
  return (
    <div>
      <div>
        <div id="basic-layout" className={styles['layout']}>
          <div style={{margin:'10px'}}>
            <div className={styles['basic-fields']}>Basic Fields</div>
            <div id="input-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}>Input</div>
            <div id="textarea-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>TextArea</div>
            <div id="dropdown-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>Drop Down</div>
            <div id="checkbox-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>Checkbox</div>
            <div id="radio-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>Radio</div>
            <div id="datepicker-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>Date Picker</div>
            <div id="label-field" className={styles['fields']}>Label</div>
            <div id="label-field" className={styles['fields']}>Heading</div>
          </div>
        </div>
         <div id="advanced-layout" className={styles['layout']}>
          <div style={{margin:'10px'}}>
            <div className={styles['basic-fields']}>Advance Fields</div>
            <div id="row-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}>Row</div>
            <div id="upload-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>File Upload</div>
            <div id="tags-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(this)}className={styles['fields']}>Tags</div>
            <div className={styles['fields']}>Accordion</div>
            <div className={styles['fields']}>List Builder</div>
            <div className={styles['fields']}>List Ranker</div>
            <div className={styles['fields']}>Simple Table</div>
            <div className={styles['fields']}>Pair Table</div>

           </div>
        </div>
       </div>
    </div>
  );
}
}

