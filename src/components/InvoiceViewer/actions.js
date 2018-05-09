import * as config from '../../config';
import Invoice from '../../domain/Invoice';

const getData = ( endpoint: string ) => {
    return fetch( config.API_URL + endpoint.toUpperCase() )
        .then( result => result.json() )
        .then( invoiceData => invoiceData.map( data => new Invoice( data ) ) )
        .catch( error => console.error( error ) );
}

export { getData }
