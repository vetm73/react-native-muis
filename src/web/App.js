import React from 'react';
import { Provider } from 'react-redux';
import Routing from './components/Routing';
import configureStore from '../store';
import { IntlProvider, addLocaleData } from 'react-intl';
import nl from 'react-intl/locale-data/nl';
addLocaleData( nl );

const store = configureStore();

const App = ( props ) => {
    return <Provider store={ store }>
        <IntlProvider locale='nl' >
            <Routing />
        </IntlProvider>
    </Provider>
}

export default App;
