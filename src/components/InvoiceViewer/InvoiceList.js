import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import InvoiceListItem from './InvoiceListItem';
import * as config from '../../config';

export default class InvoiceList extends PureComponent {
    _keyExtractor = item => item.id;

    _onPressItem = ( id: string ) => {
        const { navigator } = this.props;
        const { data } = this.props;
        const item = data.filter( item => item.id === id ).shift();
        navigator.push( {
            screen: 'muis.InvoicesDetailScreen',
            passProps: { item: item },
            title: `Factuur ${ item.id }`
        } );
    };

    _renderItem = ( { item } ) => (
        <InvoiceListItem
            id={ item.id }
            onPressItem={ this._onPressItem }
            title={ item.debtor_name }
            subtitle={ item.id + ' ' + item.invoice_date.format( config.DATE_FORMAT ) }
        />
    );

    render() {
        return (
            <FlatList
                data={ this.props.data }
                extraData={ this.state }
                keyExtractor={ this._keyExtractor }
                renderItem={ this._renderItem }
            />
        );
    }
}
