import React from 'react';
import * as BuilderHelper from '../../utils/BuilderHelper'
import * as StorageHelper from '../../utils/StorageHelper'
import {UploadIcon} from '../SVGIconComp/SvgIcons'
import styles from './Form.scss'
import * as appActions from '../../actions/appActions'
import {connect} from 'react-redux';
import CopyToClipboard from 'react-copy-to-clipboard';


@connect(state => ({
  updateStore : state.updateStore,
  updatedFieldKey : state.updatedFieldKey,
  elementClicked : state.elementClicked
  }))
export default class Form extends React.Component {
   constructor(props){
    super(props)
    this.state={
      element : [],
      generatedHtml : [],
      generatedCss:'',
      elementType:[],
      labelCopyButton: 'Copy to clipboard',
      isCopyButtonDisabled: false
    }
   }
   componentWillReceiveProps(nextProps){
     let ele = StorageHelper.getField(nextProps.updatedFieldKey)
     if(ele && this.props.updateStore != nextProps.updateStore){
       let comp = BuilderHelper.getElement(ele.metadata)
       let element = this.state.element;
       let generatedHtml = this.state.generatedHtml;
       element[nextProps.updatedFieldKey-1] = comp.element;
       generatedHtml[nextProps.updatedFieldKey-1] = comp.html;
       this.setState({
           element : element,
           generatedHtml:generatedHtml ,
           generatedCss: comp.css,
          })
     }
   }
    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text")
        if(data == 'row-field'){
          let style={
            height: '70px',
            borderColor: '#C5CBD1',
            borderStyle: 'dashed',
            borderWidth: '1px'
          }
          let element = this.state.element.concat(<div id='row' className='form-group row' style={style}></div>)
          let key = StorageHelper.addLayout(0)

          this.props.fieldSelected(data,key,ev)
          this.setState({
           element : element
          })
        } else {
            let obj = this.generateComponent(data)
            let comp = BuilderHelper.getElement(obj)
            let key = StorageHelper.addField(obj)
            this.props.fieldSelected(data,key,ev)
            let element = this.state.element.concat(comp.element)
            this.setState({
             element : element,
             generatedHtml: this.state.generatedHtml.concat(comp.html),
             generatedCss: comp.css,
             elementType: this.state.elementType.concat(key)
            })
      }

    }
    generateComponent(data){
      return{
        field : data,
        id : '',
        label : 'Sample Label',
        labelPosition: 'top',
        isRequired : true,
        placeholder: 'Enter text value',
        instruction : '',
        value : 'sample value',
        type : 'text',
        css:{
          className : 'sample-class',
          value:{

          }
        }
      }
    }
    onELementClick(index,e){
      let fieldType = this.state.elementType[index];
      console.log('fieldType',fieldType)
      this.props.dispatch(appActions.elementClicked(fieldType))
    }
     onCopy(){
    this.setState({
      labelCopyButton: 'Copied!',
      isCopyButtonDisabled: true
    });
   }

   render() {
        console.log('elementsssss',this.state.element)

      return (
        <div>
          {this.state.element.length == 0 ?
            <div className={styles['form-parent']}>
               <div className={styles['upload-button-wrapper']}>
                 <button className={`btn btn-primary ${styles['upload-button']}`}>Import Existing Form HTML
                   <UploadIcon fill1='none' fill2='white' height={36}/>
                 </button>
                <div className={styles['drag-text-div']}>
                   <span>OR</span>
                   <span>Add Fields by dragging from the left panel</span>
                </div>
               </div>
               <div id="drawing-div" className={styles['drawing-div']} onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                  <div className={styles['metadata-group']}>
                  </div>
               </div>
            </div> :
            <div>
              <div id="drawing-div" className={styles['drawing-div']} style={{height:'400px'}} onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}>
                <div className={styles['metadata-group']}>
                 {this.state.element.map((ele,i)=>
                  <div id='asdasd' onClick={this.onELementClick.bind(this,i)}>{ele}</div>
                  )}
                </div>
               </div>
               <div className={styles['generated-code-div']}>
                <div className={styles['generated-html']}>
                  <div style={{display: 'flex',
                              justifyContent: 'space-between'
                              }}}><h4>Generated Html</h4>
                  <CopyToClipboard text={this.state.generatedHtml}
                    onCopy={this.onCopy.bind(this)}>
                    <button
                      disabled={this.state.isCopyButtonDisabled}
                      bsStyle="primary">{this.state.labelCopyButton}</button>
                  </CopyToClipboard>
                  </div>
                    {this.state.generatedHtml}
                </div>
                <div className={styles['generated-css']}>
                  <div><h4>Generated Css</h4></div>
                    {this.state.generatedCss}
                </div>
              </div>
            </div>
          }
        </div>
      );
   }
}

