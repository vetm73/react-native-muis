import {
    StackNavigator,
} from 'react-navigation';

import Invoices from './components/InvoiceViewer/Invoices';
import InvoicesDetail from './components/InvoiceViewer/InvoicesDetail';


const Navigation = StackNavigator({
        Invoices: {
            screen: Invoices,
            navigationOptions: {
                title: 'Facturen',
            },
        },
        InvoicesDetail: {
            screen: InvoicesDetail,
            navigationOptions: ( { navigation } ) => ( {
                title: `Factuur ${ navigation.state.params.item.id }`,
            } ),
        },
    },
    {
        initialRouteName: 'Invoices',
    },
);

export default Navigation
