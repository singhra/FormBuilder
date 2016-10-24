import React from 'react';
import styles from './palette.scss'
import Tabs from './PaletteComponenets/Tabs'

export default class Palette extends React.Component {
  constructor(props){
    super(props)
  }
   render() {
    console.log('in palette',this.props.fieldKey)
      return (
         <div className={styles['palette']}>
            <Tabs fieldSelected={this.props.fieldSelected} fieldKey={this.props.fieldKey}/>
         </div>
      );
   }
}

