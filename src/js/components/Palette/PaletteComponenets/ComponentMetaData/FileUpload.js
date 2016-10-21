import React from 'react';
import styles from './ComponentMetaData.scss'
import {Panel} from 'react-bootstrap'
import {Expander} from '../../../SVGIconComp/SvgIcons'

export default class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openBasicPanel : false,
      openStylePanel : false,
    }
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
    debugger
    let isRequired = this.refs.isMandatory.checked
  }

   render() {
      return (
        <div>
          <form className="" role="form">
           <div className={styles['metadata-group']}>
            <div className={`form-group row`} >
              <label className='control-label' htmlFor='label'>FILE UPLOAD BOX </label>
              <label className='control-label' htmlFor='label'>Label: </label>
              <input id='label' type='text' onChange={this.inputFieldChange.bind(this,'label')}/>
            </div>
            <div className={`form-group row`} >
             <label className='control-label' htmlFor='label'>Label Position:</label>
              <div className={`${styles['radio-group']} ${styles['text-style']}`}>
                <span style={{width:'50%'}}><input  type='radio' name='type' style={{width:'20px'}} onChange={this.labelPositionChange.bind(this,'left')}/>left</span>
                <span style={{width:'50%'}}><input  type='radio' name='type' style={{width:'20px'}} onChange={this.labelPositionChange.bind(this,'top')}/>top</span>
              </div>
            </div>
             <div className={`form-group row`} >
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
               <div className={`form-group row`} >
                <label className='control-label' htmlFor='id'>Placeholder: </label>
                <input id='placeholder' type='text' onChange={this.inputFieldChange.bind(this,'placeholder')}/>
              </div>
               <div className={`form-group row ${styles['text-style']}`} >
                <span><input type='checkbox'  style={{width:'20px'}} onChange={this.isMandatoryChange.bind(this)} ref='isMandatory'/>Is Mandatory?</span>
               </div>
              <div className={`form-group row`} >
                <label className='control-label' htmlFor='default'>File Types allowed:</label>
                <textArea id='file-types-input' type='text' onChange={this.inputFieldChange.bind(this,'file-types-input')}/>
              </div>
               <div className={`form-group row`} >
                <label className='control-label' htmlFor='id' onChange={this.inputFieldChange.bind(this,'instruction')}>Instruction:</label>
                <input id='instruction' type='text'/>
               </div>
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
