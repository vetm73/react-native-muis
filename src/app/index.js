import { AppRegistry } from 'react-native';
import App from './App';

if( typeof global.self === 'undefined' )
{
    global.self = global;
}

console.ignoredYellowBox = [ 'Remote debugger', 'Warning: isMounted' ];

AppRegistry.registerComponent('RNIJ', () => App);
