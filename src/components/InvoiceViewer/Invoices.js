import React, { Component } from 'react';
import { View } from 'react-native';
import { getData } from './actions';
import InvoiceList from './InvoiceList';

export default class Invoices extends Component {
  constructor(props) {
    super(props);
    this.state = { invoices: [] };
  }

  async componentWillMount() {
    const invoices = await getData('GETFACT');
    console.table(invoices);
    this.setState({ invoices });
  }

  render() {
    const { invoices } = this.state;
    const { navigate } = this.props.navigation;
    return (
            <View>
                <InvoiceList data={ invoices } navigate={ navigate } />
            </View>
    );
  }
}
