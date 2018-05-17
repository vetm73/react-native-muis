import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getData, filter } from './actions';
import InvoiceList from './InvoiceList';
import { ButtonGroup } from 'react-native-elements';


class Invoices extends Component {
  static FILTERS = [ 'Openstaand', 'Alle' ];
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  componentWillMount() {
    this.props.getData('GETFACT');
  }

  _changeFilter = ( index ) => {
    this.setState( { selectedIndex: index } );
    this.props.filter( index );
  }

  render() {
    const { invoices } = this.props;
    const { selectedIndex } = this.state;
    const { navigator } = this.props;
    return (
            <View>
                <ButtonGroup
                  selectedIndex={ selectedIndex }
                  onPress={ this._changeFilter }
                  buttons={ [ Invoices.FILTERS[0], Invoices.FILTERS[1] ] } />
                <InvoiceList data={ invoices } navigator={ navigator } />
            </View>
    );
  }
}

const mapStateToProps = ( state, props ) => {
    return {
        invoices: state.invoices.filteredData,
        hasError: state.invoices.hasError,
        errorMessage: state.invoices.errorMessage
    };
}

const mapDispatchToProps = ( dispatch, getState ) => {
    return {
        getData: () => dispatch( getData( 'GETFACT' ) ),
        filter: ( index ) => dispatch( filter( index ) ),
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Invoices );
