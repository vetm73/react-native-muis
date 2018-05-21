import React from 'react';
import { Provider } from 'react-redux';
import Routing from './components/Routing';
import configureStore from '../store';

const store = configureStore();

const App = () => {
    return <Provider store={ store }>
        <Routing />
    </Provider>
}

export default App;
