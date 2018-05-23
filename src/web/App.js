import React from 'react';
import { Provider } from 'react-redux';
import Routing from './components/Routing';
import configureStore from '../store';
import { IntlProvider } from 'react-intl';

const store = configureStore();

const App = ( props ) => {
    return <Provider store={ store }>
        <IntlProvider locale={ navigator.language }>
            <Routing />
        </IntlProvider>
    </Provider>
}

export default App;
