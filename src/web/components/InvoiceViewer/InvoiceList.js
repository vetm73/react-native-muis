import React from 'react';
import InvoiceListItem from './InvoiceListItem';
import { ListGroup } from 'reactstrap';

const InvoiceList = ( props ) => {
    // console.log( 'InvoiceList', props )
    const { invoices } = props;
    return (
        <ListGroup>
            { invoices.map( invoice => <InvoiceListItem key={ invoice.id } invoice={ invoice } /> ) }
        </ListGroup>
    )
}

export default InvoiceList;
