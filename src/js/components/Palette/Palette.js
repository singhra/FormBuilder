import React from 'react';
import styles from './palette.scss'
import Tabs from './PaletteComponenets/Tabs'

export default class Palette extends React.Component {
  constructor(props){
    super(props)
  }
   addField(field,e){
    this.props.fieldSelected(field)
   }
   render() {
      return (
         <div className={styles['palette']}>
            <Tabs/>
         </div>
      );
   }
}

