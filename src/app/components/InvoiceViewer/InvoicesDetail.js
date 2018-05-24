import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import styles from './styles';
import { FormattedNumber } from 'react-intl';

export default class InvoicesDetail extends Component {
  render() {
    const { item } = this.props;
    return (
            <Card>
                <Text style={ styles.Label }>Factuurnummer:</Text>
                <Text>{ item.id }</Text>

                <Divider style={ styles.DividerMargin } />
                <Text style={ styles.Label }>Bedrag:</Text>
                <Text style={ styles.InvoicesDetailInput }>
                    <FormattedNumber value={ item.invoice_amount } currency='EUR' style='currency' >
                        { value => <Text>{ value }</Text> }
                    </FormattedNumber>
                </Text>
                <Text style={ styles.Label }>Datum::</Text>
                <Text style={ styles.InvoicesDetailInput }>{ item.invoice_date.format('DD-MM-YYYY') }</Text>

                <Divider style={ styles.DividerMargin } />
                <Text style={ styles.Label }>Naam:</Text>
                <Text style={ styles.InvoicesDetailInput }>{ item.debtor_name }</Text>
                <Text style={ styles.Label }>Adres:</Text>
                <Text style={ styles.InvoicesDetailInput }>{ item.debtor_address }</Text>
                <Text style={ styles.Label }>Plaats:</Text>
                <Text style={ styles.InvoicesDetailInput }>{ item.debtor_city }</Text>
                <Text style={ styles.Label }>Land:</Text>
                <Text style={ styles.InvoicesDetailInput }>{ item.debtor_country }</Text>
                <Text style={ styles.Label }>Telefoonnummer:</Text>
                <Text style={ styles.InvoicesDetailInput }>{ item.debtor_phone }</Text>
            </Card>
    );
  }
}
