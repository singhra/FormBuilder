import React from 'react';
import Palette from '../Palette/Palette'
import Form from '../Form/Form'
import Header from '../Header/Header'
import * as BuilderHelper from '../../utils/BuilderHelper'
import styles from './Layout.scss'


export default class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ele : ''
    }
  }
  fieldSelected(field,e){
    console.log(field)
    debugger
    let ele = BuilderHelper.getElement('input')
    this.setState({
      ele : ele
    })
  }
   render() {
      return (
        <div>
        <Header/>
          <div className={styles['parent-layout']}>
            <div className='row' style={{marginRight :'10px'}}>
              <div className='col-xs-3'>
                <Palette fieldSelected={this.fieldSelected.bind(this)}/>
              </div>
              <div className={`col-xs-9 ${styles['form-cretation']}`}>
                 <Form element={this.state.ele}/>
              </div>
            </div>
          </div>
        </div>
      );
   }
}
