import React from 'react';
import {Switch} from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Forgot from '../pages/Forgot';
import Dashboard from '../pages/Dashboard';
import ConsultaPEP from '../pages/ConsultaPEP';
import CadastrarPEP from '../pages/CadastroPEP';

import ListarPEP from '../pages/ListarPrep';

import Layout from '../components/Layout';

const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={SignIn}/>
      <Route path="/forgot" component={Forgot}/>

      <Layout>
        <Route path="/dashboard" component={Dashboard} isPrivate/>
        <Route path="/cadastrar"  component={CadastrarPEP} isPrivate/>
        <Route path="/consultar" exact component={ListarPEP} isPrivate/>
        <Route path="/consultar/paciente" component={ConsultaPEP} isPrivate/>
        
      </Layout>
      
    </Switch>
);

export default Routes;