import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma.min.css'

//Rotas
import Inicio from './pages/Inicio';
import Nova from './pages/Nova'
import Ver from './pages/Ver'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Inicio} />
            <Route path="/nova" component={Nova} />
            <Route path="/ver/:id" component={Ver} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));