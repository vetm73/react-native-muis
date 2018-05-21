import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppContainer from './AppContainer';
import Invoices from './InvoiceViewer/Invoices';
import Menu from './Menu';

const Routing = ( props ) => {
    console.log( 'Routing', props )
    return (
        <Router>
            <Fragment>
                <Menu />
                {/*<Route exact path='/' component={ AppContainer } />*/}
                {/*<Route exact path='/facturen' render={ props => {*/}
                    {/*console.log( 'Route', props )*/}
                    {/*return <Redirect to={ '/facturen/' } />*/}
                {/*} }/>*/}
                <Route exact path='/facturen' component={ Invoices } />
                <Route path='/facturen/:id' component={ Invoices } />
            </Fragment>
        </Router>
    )
}

export default Routing;
