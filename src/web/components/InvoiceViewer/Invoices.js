import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getData, filter } from '../../../app/components/InvoiceViewer/actions';
import InvoiceList from './InvoiceList';
import InvoiceDetail from './InvoiceDetail';
import FilterButton from './FilterButton';
import { Col, Container, Row } from 'reactstrap';

class Invoices extends Component {
    componentWillMount() {
        this.props.getData();
    }

    render() {
        const { invoices, filter, match } = this.props;
        const id = match.params && match.params.id || null;
        const invoice =  id ? invoices.filter( invoice => invoice.id === id ).shift() : invoices[0];

        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <FilterButton label='Openstaand' filterValue={ 0 } onClick={ filter } />{ ' ' }
                            <FilterButton label='Alle' filterValue={ 1 } onClick={ filter } />
                            <InvoiceList invoices={ invoices } />
                        </Col>
                        <Col>
                            { invoice && <InvoiceDetail invoice={ invoice } /> }
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        )
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
        getData: () => dispatch( getData( 'GETFACT', '/api' ) ),
        filter: ( index ) => dispatch( filter( index ) ),
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Invoices );
