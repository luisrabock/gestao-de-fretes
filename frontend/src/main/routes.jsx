import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Home from '../common/template/home';
import Notfis from '../common/template/notfis';
import Conemb from '../common/template/conemb';
import App from '../main/app';
import Ocorren from '../common/template/ocorren';
import Prefat from '../common/template/prefat';
import Doccob from '../common/template/doccob';
import Individual from '../common/template/individual';


export default (props) => (
  <Router history={hashHistory}>
        <Route path='/' component={Home} />
       <Route path='/notfis' component={Notfis} />
       <Route path='/conemb' component={Conemb} />
       <Route path='/ocorren' component={Ocorren} />
       <Route path='/prefat' component={Prefat} />
       <Route path='/doccob' component={Doccob} />
       <Route path='/individual' component={Individual} />
       <Redirect from ='*' to='/' />
  </Router>
);