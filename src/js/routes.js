import React from 'react';
import {Route, Router, IndexRoute, IndexRedirect} from 'react-router';
import App from './App';
import Layout from './components/ParentLayout/Layout'


export default (
	<Router>
	  <Route path='/' component={App} >
	   	<IndexRedirect to="/Layout"/>
			<Route path="/Layout" component={Layout}/>
		</Route>
	</Router>
  )
