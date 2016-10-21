import React from 'react';
import styles from './ComponentsLayout.scss'


export default class ComponentsLayout extends React.Component {
   render() {
      return (
        <div>
          <div className={styles['layout']}>
            <div style={{margin:'10px'}}>
              <div className={styles['basic-fields']}>Basic Fields</div>
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
           <div className={styles['layout']}>
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

