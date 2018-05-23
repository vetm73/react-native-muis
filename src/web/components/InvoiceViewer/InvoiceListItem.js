import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import styles from './InvoiceListItem.css';
import * as config from '../../../config';

const InvoiceListItem = ( props ) => {
    // console.log( 'InvoiceListItem', props )
    const { invoice } = props;
    return (
        <Link to={ '/facturen/' + invoice.id } className={ styles.link }>
            <ListGroupItem tag='button' action>
                <ListGroupItemHeading>{ invoice.debtor_name }</ListGroupItemHeading>
                <ListGroupItemText>{ invoice.id + ' ' + invoice.invoice_date.format( config.DATE_FORMAT ) }</ListGroupItemText>
            </ListGroupItem>
        </Link>

    )
}

export default InvoiceListItem;
