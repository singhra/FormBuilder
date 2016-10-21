import React from 'react';
import * as BuilderHelper from '../../utils/BuilderHelper'
import {UploadIcon} from '../SVGIconComp/SvgIcons'
import styles from './Form.scss'
// import field_styles from '../Palette/PaletteComponenets/ComponentsToDND/ComponentsLayout.scss

export default class Form extends React.Component {

   constructor(props){
    super(props)
    this.state={
      element : [],
      generatedHtml : '',
      generatedCss:''
    }
   }

    allowDrop(ev) {
        ev.preventDefault();
    }

    drop(ev) {
        ev.preventDefault();

        let data = ev.dataTransfer.getData("text")
        this.props.fieldSelected(data,ev)
        console.log('in form',data)
        let obj = this.generateComponent(data)
        let comp = BuilderHelper.getElement(obj)
        this.setState({
         element : this.state.element.concat(comp.element),
         generatedHtml: this.state.generatedHtml.concat(comp.html),
         generatedCss: comp.css
        })

    }
    generateComponent(data){
      return{
        field : data,
        id : '',
        label : 'Sample Label',
        labelPosition: 'top',
        isRequired : true,
        placeholder: 'Enter text value',
        instruction : 'enter text',
        value : 'sample value',
        type : 'text',
        css:{
          className : 'sample-class',
          value:{

          }
        }
      }
    }

   // componentWillReceiveProps(nextProps){
   //  this.setState({
   //    element : nextProps.element
   //  })
   // }

   render() {
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
                 {this.state.element}
                </div>
               </div>
               <div className={styles['generated-code-div']}>
                <div className={styles['generated-html']}>
                  <div><h4>Generated Html</h4></div>
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

