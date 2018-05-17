import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class InvoiceListItem extends React.PureComponent {
    _onPress = () => {
        const { id, onPressItem } = this.props;
        onPressItem( id );
    }

    render() {
        const { title, subtitle } = this.props;
        return (
            <TouchableOpacity onPress={ this._onPress }>
                <ListItem
                    title={ title }
                    subtitle={ subtitle } />
            </TouchableOpacity>
        );
    }
}
