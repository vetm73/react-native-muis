import React, { Component } from 'react';
import { View } from 'react-native';
import { getData } from './actions';
import InvoiceList from './InvoiceList';
import { ButtonGroup } from 'react-native-elements';

export default class Invoices extends Component {
  static FILTERS = [ 'Openstaand', 'Alle' ];
  constructor(props) {
    super(props);
    this.state = {
      invoices: [],
      selectedIndex: 0
    };
    this.invoices = [];
  }

  async componentWillMount() {
    this.invoices = await getData('GETFACT');
    console.table( this.invoices );
    this._filter();
  }

  _filter = () => {
    const { selectedIndex } = this.state;
    const filteredInvoices = selectedIndex === 1 ? this.invoices : this.invoices.filter( invoice => invoice.invoice_paid );
    this.setState( { invoices: filteredInvoices } );
  }

  _changeFilter = ( index ) => {
    this.setState( { selectedIndex: index }, () => this._filter() );
  }

  render() {
    const { invoices, selectedIndex } = this.state;
    const { navigate } = this.props.navigation;
    return (
            <View>
                <ButtonGroup
                  selectedIndex={ selectedIndex }
                  onPress={ this._changeFilter }
                  buttons={ [ Invoices.FILTERS[0], Invoices.FILTERS[1] ] } />
                <InvoiceList data={ invoices } navigate={ navigate } />
            </View>
    );
  }
}
