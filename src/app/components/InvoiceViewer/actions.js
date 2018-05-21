import * as config from '../../../config';
import * as types from '../../../actionTypes';

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

function getPathFromUrl( url ) {
    const parser = new URL( url );
    return parser.pathname + parser.search;
}

const getData = ( endpoint: string, proxy: string ) => {
    const apiUrl = proxy ? proxy + getPathFromUrl( config.API_URL ) : config.API_URL;
    return ( dispatch, getState ) => {
        dispatch( start() );
        return fetch( apiUrl + endpoint.toUpperCase() )
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
