import React from 'react';
import Invoice from '../../../domain/Invoice';

const InvoiceDetail = ( props ) => {
    const { invoice } = props;

    return (
        <div>
            <h1>Invoice detail { invoice.id }</h1>
            {  }
        </div>
    )
}

export default InvoiceDetail;
