import React from 'react';
import { Nav,NavItem,NavDropdown,MenuItem,Panel,Accordion,Well } from 'react-bootstrap';
import styles from './Header.scss';


export default class Header extends React.Component {
 constructor(props) {
  super(props);
  this.state={
    activeKey : 1
  }

  }
  handleClick(e){
    this.setState({
      activeKey:this.state.activeKey === 1 ? 2 : 1

     })

  }

render() {
      return (
        <div className={styles['main-header']}>
         <div className={styles['nav-header']}>
              <nav className="navbar">
                  <div className="container-fluid">
                   <div className='row'>
                   <div className="drop-nav navbar-left col-md-4 col-lg-4 col-sm-4 col-xs-4">
                   <div className={styles['logo']}>
                       Form Designer
                   </div>
                   </div>
                </div>
                </div>
             </nav>
          </div>
  </div>
      );
    }
  }
