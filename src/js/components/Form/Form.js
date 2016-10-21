import React from 'react';
import BuilderHelper from '../../utils/BuilderHelper'
import {UploadIcon} from '../SVGIconComp/SvgIcons'
import styles from './Form.scss'

export default class Form extends React.Component {
   constructor(props){
    super(props)
    this.state={
      element : ''
    }
   }
   componentWillReceiveProps(nextProps){
    this.setState({
      element : nextProps.element
    })
   }
   render() {
      return (
         <div className={styles['form-parent']}>
          <div>
            <button className={`btn btn-primary ${styles['upload-button']}`}>Import Existing Form HTML
              <UploadIcon fill1='none' fill2='white' height={36}/>
            </button>
            <div className={styles['drag-text-div']}>
             <span>OR</span>
              <span>Add Fields by dragging from the left panel</span>
            </div>
          </div>
           <div className={styles['drawing-div']}>
           </div>
         </div>
      );
   }
}

