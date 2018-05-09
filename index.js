import { AppRegistry } from 'react-native';
import App from './src/App';

console.ignoredYellowBox = [ 'Remote debugger', 'Warning: isMounted' ];

AppRegistry.registerComponent('RNIJ', () => App);
