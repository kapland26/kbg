import React from 'react';
import {Route,Switch} from 'react-router-dom';

// import Home from './components/Home/Home.js';
import Home from './components/Home/Home.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import RetailBankOpt from './components/RetailBankOpt/RetailBankOpt.js';
import SupChainOpt from './components/SupChainOpt/SupChainOpt.js';
import VisExpOpt from './components/VisExpOpt/VisExpOpt.js';

export default(
    <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
    </Switch>
)