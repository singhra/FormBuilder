import React from 'react';
import styles from './Tabs.scss'
import Components from './ComponentsToDnD/ComponentsLayout'
import {PlusIcon,BackIcon} from '../../SVGIconComp/SvgIcons'
import * as BuilderHelper from '../../../utils/BuilderHelper'


export default class Palette extends React.Component {
  constructor(props){
    super(props)
    this.state={
      metadataComp : ''
   }
  }
componentWillReceiveProps(nextProps){
  let ele = BuilderHelper.getMetaData(nextProps.fieldSelected)
  this.setState({
    metadataComp : ele
  })
}
backtoPalette(e){
  this.setState({
    metadataComp : ''
  })
}
render() {
  return (
    <div>
    {!this.state.metadataComp ?
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
        <Components fieldSelected={this.props.fieldSelected}/>
        </div>
      </div>
    </div> :
     <div className={styles['metadata']}>
      <button className={`btn btn-default ${styles['back-btn']}`} onClick={this.backtoPalette.bind(this)}>
        <BackIcon fill1='none' fill2='black'/><span>Back to Palette</span></button>
      <div className={styles['metadata-heading']}><h3>Meta Data</h3></div>
      {this.state.metadataComp}
      </div>
    }
    </div>
  );
}
}

