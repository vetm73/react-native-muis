import React from 'react';
import Invoice from '../../../domain/Invoice';
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Table } from 'reactstrap';
import styles from './InvoiceDetail.css';
import { FormattedNumber } from 'react-intl';

const InvoiceDetail = ( props ) => {
    const { invoice } = props;

    return (
        <div>
            <Card>
                <CardHeader>Factuurnummer: { invoice.id }</CardHeader>
                <CardBody>
                    <CardTitle>Naam: { invoice.debtor_name }</CardTitle>
                    <CardSubtitle>Datum: { invoice.invoice_date.format('DD-MM-YYYY') }</CardSubtitle>
                    <br />
                    <Table>
                        <tbody>
                            <tr>
                                <td>Bedrag:</td>
                                <td><FormattedNumber value={ invoice.invoice_amount } currency='EUR' style='currency' /></td>
                            </tr>
                            <tr>
                                <td>Adres:</td>
                                <td>{ invoice.debtor_address }</td>
                            </tr>
                            <tr>
                                <td>Plaats:</td>
                                <td>{ invoice.debtor_city }</td>
                            </tr>
                            <tr>
                                <td>Land:</td>
                                <td>{ invoice.debtor_country }</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>{ invoice.debtor_phone }</td>
                            </tr>

                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
    )
}

export default InvoiceDetail;
