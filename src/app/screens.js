import { Navigation } from 'react-native-navigation';

import InvoicesScreen from './components/InvoiceViewer/Invoices';
import InvoiceDetailScreen from './components/InvoiceViewer/InvoicesDetail';
import SplashScreen from './components/Misc/Splash';

export function registerScreens( store, Provider ) {
    Navigation.registerComponent('muis.InvoicesScreen', () => InvoicesScreen, store, Provider );
    Navigation.registerComponent('muis.InvoicesDetailScreen', () => InvoiceDetailScreen, store, Provider );
    Navigation.registerComponent('muis.SplashScreen', () => SplashScreen, store, Provider );
}
