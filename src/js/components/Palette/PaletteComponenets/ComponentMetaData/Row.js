import React from 'react';
import styles from './ComponentMetaData.scss'
import {Panel} from 'react-bootstrap'
import {Expander,PlusIcon} from '../../../SVGIconComp/SvgIcons'

export default class Row extends React.Component {
  constructor(props){
    super(props)
    this.state={
      columns : [].concat(this.colSizeElement(0)),
      numberOfCol : 0
    }
  }
  colSizeElement(index){
   return ( <div className={`form-group row`} style={{display:'flex'}}>
                <label className='control-label' htmlFor='default'>Col:</label>
                <input id='column' type='number' value={index+1} readOnly style={{width: '20%', marginRight: '5px'}}/>
                <label className='control-label' htmlFor='default'>Size:</label>
                <input id='column' type='number' onChange={this.inputFieldChange.bind(this,'column')} style={{width: '40%', marginRight: '5px'}}/>
                 <div onClick={this.addCol.bind(this)}><PlusIcon fill1='none' fill2='white'/></div>
              </div>
          )
  }
  basicPanelHandler(e){
    this.setState({
      openBasicPanel : !this.state.openBasicPanel
      })
  }
  openStylePanel(e){
    this.setState({
      openStylePanel : !this.state.openStylePanel
    })
  }
  inputFieldChange(e,field){
    let val = e.target.value
  }
  labelPositionChange(e,position){
    let val = position
  }
  typeChange(e,field){
    let val = e.target.value
  }
  isMandatoryChange(e){
    let isRequired = this.refs.isMandatory.checked
  }
  DirectionChange(e,position){
    let val = position
  }
  addCol(e){
    this.setState({
      numberOfCol : this.state.numberOfCol + 1,
      columns : this.state.columns.concat(this.colSizeElement(this.state.numberOfCol + 1))
    })
  }

   render() {
    console.log('columnsssss',this.state.columns)
      return (
        <div>
          <form className="" role="form">
           <div className={styles['metadata-group']}>
             <div className={`form-group row`} >
              <label className='control-label' htmlFor='label'>ROW</label>
              <label className='control-label' htmlFor='id'>Id:</label>
              <input id='id' type='text' onChange={this.inputFieldChange.bind(this,'id')}/>
            </div>
           </div>
           <div className={styles['metadata-group']}>
            <span className={styles['expander']} onClick={this.basicPanelHandler.bind(this)}>
             <Expander fill1='none' fill2='white'/>
             <span className={styles['text-style']}>Basic Attributes</span>
            </span>
            <Panel collapsible className={styles['panel']} expanded={this.state.openBasicPanel} eventKey="1">
            {this.state.columns}
             </Panel>
           </div>
            <div className={styles['metadata-group']}>
            <span className={styles['expander']} onClick={this.openStylePanel.bind(this)}>
              <Expander fill1='none' fill2='white'/>
              <span className={styles['text-style']}>Custom Styles</span>
            </span>
            <Panel collapsible className={styles['panel']} expanded={this.state.openStylePanel} eventKey="1">
               <div className={`form-group row`} >
                <label className='control-label' htmlFor='id'>ClassName: </label>
                <input id='placeholder' type='text' onChange={this.inputFieldChange.bind(this,'className')}/>
              </div>
                <div className={`form-group row`} >
                 <label className='control-label' htmlFor='id' onChange={this.inputFieldChange.bind(this,'css')}>Raw Css:</label>
                  <textArea id='placeholder' type='text'/>
              </div>
            </Panel>
           </div>
          </form>
       </div>
      );
   }
}
