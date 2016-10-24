import React from 'react';
import Palette from '../Palette/Palette'
import Form from '../Form/Form'
import Header from '../Header/Header'
import * as BuilderHelper from '../../utils/BuilderHelper'
import * as StorageHelper from '../../utils/StorageHelper'
import styles from './Layout.scss'


export default class Layout extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ele : '',
      key : ''
    }
    StorageHelper.storeDataTemplate()
  }
  fieldSelected(field,key,e){
    console.log('in Layout', field, key, e)
    this.setState({
      ele : field,
      key : key
    })

  }
   render() {
    console.log('in layout',this.state.key)
      return (
        <div>
        <Header/>
          <div className={styles['parent-layout']}>
            <div className='row' style={{marginRight :'10px'}}>
              <div className='col-xs-3'>
                <Palette fieldSelected={this.state.ele} fieldKey={this.state.key} />
              </div>
              <div className={`col-xs-9 ${styles['form-cretation']}`}>
               <div>
                 <Form fieldSelected={this.fieldSelected.bind(this)}/>
               </div>
              </div>
            </div>
          </div>
        </div>
      );
   }
}
