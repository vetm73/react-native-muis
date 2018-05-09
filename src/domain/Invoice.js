import Moment from 'moment';

export default class Invoice {
    static INVOICE_ID = 'FACT';
    static INVOICE_BALANCE = 'SALDO';
    static INVOICE_PAID = 'VOLDAAN';
    static INVOICE_BET = 'BET';
    static DEBTOR_ID = 'DEB';
    static DEBTOR_NAME = 'DEB_NAAM';
    static DEBTOR_ADDRESS = 'DEB_ADRES';
    static DEBTOR_CITY = 'DEB_PLAATS';
    static DEBTOR_COUNTRY ='DEB_LAND';
    static DEBTOR_PHONE = 'DEB_TEL';
    static DEBTOR_BALANCE = 'DEB_SALDO';
    static INVOICE_ATTRIBUTE = 'KENM';
    static INVOICE_AMOUNT = 'BEDR';
    static INVOICE_DATE = 'DAT';
    static INVOICE_CREDIT_NOTE = 'CREDITNOTAFACT';
    static DEBTOR_INVOICE_ID = 'DEBORDER';
    static DEBTOR_INVOICE_NAME = 'DEBORDER_NAAM';

    constructor( data ) {
        this._id = data[ Invoice.INVOICE_ID ] || null;
        this._invoice_balance = data[ Invoice.INVOICE_BALANCE ] && parseFloat( data[ Invoice.INVOICE_BALANCE ] ) || 0.00;
        this._invoice_paid = data[ Invoice.INVOICE_PAID ] && data[ Invoice.INVOICE_PAID ] !== 'N' || false;
        this._invoice_bet = data[ Invoice.INVOICE_BET ];
        this._debtor_id = data[ Invoice.DEBTOR_ID ] && parseInt( data[ Invoice.DEBTOR_ID ] ) || null;
        this._debtor_name = data[ Invoice.DEBTOR_NAME ] || null;
        this._debtor_address = data[ Invoice.DEBTOR_ADDRESS ] || null;
        this._debtor_city = data[ Invoice.DEBTOR_CITY ] || null;
        this._debtor_country = data[ Invoice.DEBTOR_COUNTRY ] || null;
        this._debtor_phone = data[ Invoice.DEBTOR_PHONE ] || null;
        this._debtor_balance = data[ Invoice.DEBTOR_BALANCE ] && parseFloat( data[ Invoice.DEBTOR_BALANCE ] ) || 0.00;
        this._invoice_attribute = data[ Invoice.INVOICE_ATTRIBUTE ] || null;
        this._invoice_amount = data[ Invoice.INVOICE_AMOUNT ] && parseFloat( data[ Invoice.INVOICE_AMOUNT ] ) || 0.00;
        this._invoice_date = data[ Invoice.INVOICE_DATE ] && Moment( new Date( data[ Invoice.INVOICE_DATE ] ) ) || null;
        this._invoice_credit_note = data[ Invoice.INVOICE_CREDIT_NOTE ] || null;
        this._debtor_invoice_id = data[ Invoice.DEBTOR_INVOICE_ID ] && parseInt( data[ Invoice.DEBTOR_INVOICE_ID ] ) || null;
        this._debtor_invoice_name = data[ Invoice.DEBTOR_INVOICE_NAME ] || null;
        this._data = data;
    }

    get id() {
        return this._id;
    }

    set id( value ) {
        this._id = value;
    }

    get data() {
        return this._data;
    }

    set data( value ) {
        this._data = value;
    }

    get invoice_balance() {
        return this._invoice_balance;
    }

    set invoice_balance( value ) {
        this._invoice_balance = value;
    }

    get invoice_paid() {
        return this._invoice_paid;
    }

    set invoice_paid( value ) {
        this._invoice_paid = value;
    }

    get invoice_bet() {
        return this._invoice_bet;
    }

    set invoice_bet( value ) {
        this._invoice_bet = value;
    }

    get debtor_id() {
        return this._debtor_id;
    }

    set debtor_id( value ) {
        this._debtor_id = value;
    }

    get debtor_name() {
        return this._debtor_name;
    }

    set debtor_name( value ) {
        this._debtor_name = value;
    }

    get debtor_address() {
        return this._debtor_address;
    }

    set debtor_address( value ) {
        this._debtor_address = value;
    }

    get debtor_city() {
        return this._debtor_city;
    }

    set debtor_city( value ) {
        this._debtor_city = value;
    }

    get debtor_country() {
        return this._debtor_country;
    }

    set debtor_country( value ) {
        this._debtor_country = value;
    }

    get debtor_phone() {
        return this._debtor_phone;
    }

    set debtor_phone( value ) {
        this._debtor_phone = value;
    }

    get debtor_balance() {
        return this._debtor_balance;
    }

    set debtor_balance( value ) {
        this._debtor_balance = value;
    }

    get invoice_attribute() {
        return this._invoice_attribute;
    }

    set invoice_attribute( value ) {
        this._invoice_attribute = value;
    }

    get invoice_amount() {
        return this._invoice_amount;
    }

    set invoice_amount( value ) {
        this._invoice_amount = value;
    }

    get invoice_date() {
        return this._invoice_date;
    }

    set invoice_date( value ) {
        this._invoice_date = value;
    }

    get invoice_credit_note() {
        return this._invoice_credit_note;
    }

    set invoice_credit_note( value ) {
        this._invoice_credit_note = value;
    }

    get debtor_invoice_id() {
        return this._debtor_invoice_id;
    }

    set debtor_invoice_id( value ) {
        this._debtor_invoice_id = value;
    }

    get debtor_invoice_name() {
        return this._debtor_invoice_name;
    }

    set debtor_invoice_name( value ) {
        this._debtor_invoice_name = value;
    }
}
