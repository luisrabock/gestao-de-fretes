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
import Dashboard from '../deliveries/dashboard';
import Grid from '../dashboard/gridNf';
import Tax from '../tax/taxMain';
import Deadline from '../deadlines/deadlines';
import RegionsPost from '../regions/postRegions';
import RegionsGet from '../regions/getRegions';


export default (props) => (
  <Router history={hashHistory}>
       <Route path='/' component={Home} />
       <Route path='/dashboard' component={Dashboard} />
       <Route path='/notfis' component={Notfis} />
       <Route path='/conemb' component={Conemb} />
       <Route path='/ocorren' component={Ocorren} />
       <Route path='/prefat' component={Prefat} />
       <Route path='/doccob' component={Doccob} />
       <Route path='/individual' component={Individual} />
       <Route path='/notas' component={Grid} />
       <Route path='/tax' component={Tax} />
       <Route path='/deadlines' component={Deadline} />
       <Route path='/regions' component={RegionsPost} />
       <Route path='/getRegions' component={RegionsGet} />
       <Redirect from ='*' to='/' />
  </Router>
);

