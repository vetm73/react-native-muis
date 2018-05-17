import * as config from '../../config';
import * as types from '../../actionTypes';
import Invoice from '../../domain/Invoice';

const start = () => {
    return {
        type: types.FETCH_INVOICES_DATA_REQUEST
    }
}

const success = ( data ) => {
    return ( dispatch, getState ) => {
        dispatch( {
            type: types.FETCH_INVOICES_DATA_SUCCESS,
            payload: data
        } );
        dispatch ( {
            type: types.FILTER_INVOICES,
            payload: 0
        } );
    }
}

const failure = ( error ) => {
    return {
        type: types.FETCH_INVOICES_DATA_FAILURE,
        payload: error
    }
}

const getData = ( endpoint: string ) => {
    return ( dispatch, getState ) => {
        dispatch( start() );
        return fetch( config.API_URL + endpoint.toUpperCase() )
            .then( result => {
                if ( result.ok ) {
                    return result.json();
                } else {
                    dispatch( failure( result.statusText ) );
                }
            } )
            .then( json => dispatch( success( json ) ) )
            .catch( error => {
                console.error( error )
                dispatch( failure( error ));
            } );
    }
}

const filter = ( filter ) => {
    return {
        type: types.FILTER_INVOICES,
        payload: filter
    }
}

export { getData, filter }
