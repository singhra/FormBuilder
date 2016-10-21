import React from 'react';
import styles from './Tabs.scss'
import Components from './ComponentsToDnD/ComponentsLayout'
import {PlusIcon} from '../../SVGIconComp/SvgIcons'

export default class Palette extends React.Component {
  constructor(props){
    super(props)
  }
   addField(field,e){
    this.props.fieldSelected(field)
   }
   render() {
      return (
        <div>
          <ul className={`nav nav-tabs ${styles['nav-tabs']}`}>
            <li className={`active ${styles['tab-list']}`} style={{marginBottom : '0px'}}><a data-toggle="tab" href="#component" className={styles['tabs']} style={{padding:'8px'}}>
            <PlusIcon fill1='none' fill2='rgb(170, 170, 170)'/>Add Fields</a></li>
            <li className={styles['tab-list']} style={{marginBottom : '0px'}}><a data-toggle="tab" href="#form" className={styles['tabs']}>Form</a></li>

          </ul>

          <div className="tab-content">
            <div id="form" className="tab-pane fade">
            </div>
            <div id="component" className="tab-pane fade in active">
            <Components/>
            </div>
          </div>
        </div>
      );
   }
}

