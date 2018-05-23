import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Invoices from './InvoiceViewer/Invoices';
import Menu from './Menu';
import Home from './Home';

const Routing = ( props ) => {
    return (
        <Router>
            <Fragment>
                <Menu />
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route exact path='/facturen' component={ Invoices } />
                    <Route path='/facturen/:id' component={ Invoices } />
                </Switch>
            </Fragment>
        </Router>
    )
}

export default Routing;
