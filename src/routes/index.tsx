import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import CadastroPEP from '../pages/CadastroPEP';
import ListarPEP from '../pages/ListarPrep';

import Layout from '../components/Layout';

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/signup" component={SignUp}/>

      <Layout>
        <Route path="/dashboard" component={Dashboard} isPrivate/>
        <Route path="/consultar" component={ListarPEP} isPrivate/>
        <Route path="/cadastrar" component={CadastroPEP} isPrivate/>
      </Layout>
      
    </Switch>
);

export default Routes;