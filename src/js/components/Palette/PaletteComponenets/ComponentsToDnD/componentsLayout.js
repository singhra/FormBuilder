import React from 'react';
import styles from './ComponentsLayout.scss'


export default class ComponentsLayout extends React.Component {

drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

   render() {
      return (
        <div>
          <div id="basic-layout" className={styles['layout']}>
            <div style={{margin:'10px'}}>
              
              <div className={styles['basic-fields']}>Basic Fields</div>
              <div id="input-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}>Input</div>
              <div id="textarea-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>TextArea</div>
              <div id="dropdown-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>Drop Down</div>
              <div id="checkbox-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>Checkbox</div>
              <div id="radio-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>Radio</div>
              <div id="upload-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>File Upload</div>
              <div id="tags-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>Tags</div>
              <div id="datepicker-field" className={styles['fields']} draggable="true" onDragStart={this.drag.bind(event)}className={styles['fields']}>Date Picker</div>
             </div>
          </div>
           <div id="advanced-layout" className={styles['layout']}>
            <div style={{margin:'10px'}}>
              <div className={styles['basic-fields']}>Advance Fields</div>
              <div className={styles['fields']}>Input</div>
              <div className={styles['fields']}>TextArea</div>
              <div className={styles['fields']}>Drop Down</div>
              <div className={styles['fields']}>Checkbox</div>
              <div className={styles['fields']}>Radio</div>
              <div className={styles['fields']}>File Upload</div>
              <div className={styles['fields']}>Tags</div>
              <div className={styles['fields']}>Date Picker</div>
             </div>
          </div>
        </div>
      );
   }
}

