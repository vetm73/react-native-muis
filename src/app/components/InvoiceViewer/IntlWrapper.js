import React, { Component } from 'react';
import 'intl';
import { IntlProvider, addLocaleData } from 'react-intl';
import nl from 'react-intl/locale-data/nl';
import InvoicesDetail from './InvoicesDetail';

addLocaleData( nl );

const IntlWrapper = ( props ) => {
    return (
        <IntlProvider locale='nl'>
            <InvoicesDetail { ...props } />
        </IntlProvider>
    )
}

export default IntlWrapper;
