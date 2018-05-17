import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens';
import configureStore from './store';

const store = configureStore();

registerScreens( store, Provider );

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Facturen',
            screen: 'muis.InvoicesScreen',
            icon: require('./images/one.png'),
            // selectedIcon: require('../img/one_selected.png'), // iOS only
            title: 'Facturen'
        },
        {
            label: 'Splash',
            screen: 'muis.SplashScreen',
            icon: require('./images/two.png'),
            // selectedIcon: require('../img/two_selected.png'), // iOS only
            title: 'Splash'
        }
    ]
});

/**
 * Muis Demo App
 * @flow
 */
/*
import React, { Component } from 'react';
import Navigation from './Navigation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Navigation />
    );
  }
}
*/
