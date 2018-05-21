import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'reactstrap';

const InvoiceListItem = ( props ) => {
    // console.log( 'InvoiceListItem', props )
    const { invoice } = props;
    return (
        <ListGroupItem>
            <Link to={ '/facturen/' + invoice.id }>{ invoice.id }</Link>
        </ListGroupItem>
    )
}

export default InvoiceListItem;
