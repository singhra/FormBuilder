import React from 'react';
import styles from './ComponentMetaData.scss'
import {Panel} from 'react-bootstrap'
import {Expander} from '../../../SVGIconComp/SvgIcons'
import * as StorageHelper from '../../../../utils/StorageHelper'
import {connect} from 'react-redux';
import * as appActions from 'js/actions/appActions';

@connect(state => ({
  updateStore : state.updateStore,
  updatedFieldKey : state.updatedFieldKey
  }))
export default class Input extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      openBasicPanel : false,
      openStylePanel : false,
      fieldKey : this.props.fieldKey
    }

  }
  componentWillReceiveProps(nextProps){
    // this.setState({
    //   fieldKey : nextProps.fieldKey
    // })
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
  inputFieldChange(field,e){
    let val = e.target.value
    StorageHelper.updateField(this.state.fieldKey,'metadata',field,val)
    this.props.dispatch(appActions.updateStore(this.props.updateStore+1))
    this.props.dispatch(appActions.updatedFieldKey(this.state.fieldKey))

  }
  labelPositionChange(position,e){
    let val = position
    StorageHelper.updateField(this.state.fieldKey,'metadata','labelPosition',val)
    this.props.dispatch(appActions.updateStore(this.props.updateStore+1))
    this.props.dispatch(appActions.updatedFieldKey(this.state.fieldKey))

  }
  typeChange(type,e){
    let val = type
    StorageHelper.updateField(this.state.fieldKey,'metadata','type',val)
    this.props.dispatch(appActions.updateStore(this.props.updateStore+1))
    this.props.dispatch(appActions.updatedFieldKey(this.state.fieldKey))
  }
  isMandatoryChange(e){
    let isRequired = this.refs.isMandatory.checked
    StorageHelper.updateField(this.state.fieldKey,'metadata','isRequired',isRequired)
    this.props.dispatch(appActions.updateStore(this.props.updateStore+1))
    this.props.dispatch(appActions.updatedFieldKey(this.state.fieldKey))
  }

   render() {
    let {metadata} = this.props
      return (
        <div>
          <form className="" role="form">
           <div className={styles['metadata-group']}>
            <div className={`form-group row`} >
              <label className='control-label' htmlFor='label'>INPUT </label>
              <label className='control-label' htmlFor='label'>Label: </label>
              <input id='label' type='text' value={metadata.label} onChange={this.inputFieldChange.bind(this,'label')}/>
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
                <label className='control-label' htmlFor='label'>Type: </label>
                <div className={`${styles['radio-group']} ${styles['text-style']}`}>
                  <span style={{width:'50%'}}><input id='text' type='radio' name='type-basic' style={{width:'20px'}} onChange={this.typeChange.bind(this,'text')}/>text</span>
                  <span style={{width:'50%'}}><input id='number' type='radio' name='type-basic' style={{width:'20px'}} onChange={this.typeChange.bind(this,'number')}/>number</span>
                  <span style={{width:'50%'}}><input id='email' type='radio' name='type-basic' style={{width:'20px'}} onChange={this.typeChange.bind(this,'email')}/>email</span>
                  <span style={{width:'50%'}}><input id='password' type='radio' name='type-basic' style={{width:'20px'}} onChange={this.typeChange.bind(this,'password')}/>password</span>
                </div>
              </div>
               <div className={`form-group row`} >
                <label className='control-label' htmlFor='id'>Placeholder: </label>
                <input id='placeholder' type='text' onChange={this.inputFieldChange.bind(this,'placeholder')}/>
              </div>
               <div className={`form-group row ${styles['text-style']}`} >
                <span><input type='checkbox'  style={{width:'20px'}} onChange={this.isMandatoryChange.bind(this)} ref='isMandatory'/>Is Mandatory</span>
               </div>
              <div className={`form-group row`} >
                <label className='control-label' htmlFor='default'>Default Value:</label>
                <input id='default' type='text' onChange={this.inputFieldChange.bind(this,'value')}/>
              </div>
               <div className={`form-group row`} >
                <label className='control-label' htmlFor='id'>Instruction:</label>
                <input id='instruction' type='text' onChange={this.inputFieldChange.bind(this,'instruction')}/>
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
