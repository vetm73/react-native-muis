import React from 'react';
import InvoiceListItem from './InvoiceListItem';
import { ListGroup } from 'reactstrap';
import styles from './InvoiceList.css';

const InvoiceList = ( props ) => {
    // console.log( 'InvoiceList', props )
    const { invoices } = props;
    return (
        <ListGroup className={ styles.container }>
            { invoices.map( invoice => <InvoiceListItem key={ invoice.id } invoice={ invoice } /> ) }
        </ListGroup>
    )
}

export default InvoiceList;
