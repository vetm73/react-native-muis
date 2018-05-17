import * as types from '../actionTypes';
import Invoice from '../domain/Invoice';

const initialState = {
    data: [],
    hasError: false,
    errorMessage: '',
    filteredData: [],
};

export default function configuration( state = initialState, action = {} ) {
    switch ( action.type ) {
        case types.FETCH_INVOICES_DATA_SUCCESS:
            console.log( types.FETCH_INVOICES_DATA_SUCCESS )
            const data = action.payload
            return {
                ...state,
                data: data.map( data => new Invoice( data ) ),
                hasError: false,
                errorMessage: '',
            };
        case types.FETCH_INVOICES_DATA_FAILURE:
            console.log( types.FETCH_INVOICES_DATA_FAILURE )
            return {
                ...state,
                hasError: true,
                errorMessage: action.payload,
            }
        case types.FILTER_INVOICES:
            console.log( types.FILTER_INVOICES )
            return {
                ...state,
                filteredData: action.payload === 1 ? state.data : state.data.filter( invoice => invoice.invoice_paid ),
            }
        default:
            return state;
    }
}
