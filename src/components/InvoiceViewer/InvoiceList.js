import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import InvoiceListItem from './InvoiceListItem';
import * as config from '../../config';

export default class InvoiceList extends PureComponent {
    _keyExtractor = item => item.id;

    _onPressItem = ( id: string ) => {
        const { navigate } = this.props;
        const { data } = this.props;
        navigate( 'InvoicesDetail', { item: data.filter( item => item.id === id ).shift() } );
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
