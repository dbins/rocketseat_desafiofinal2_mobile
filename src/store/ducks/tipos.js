import { navigate } from '../../services/navigation';
/**
 * Action Types
 */

export const Types = {
  REQUEST: 'tipos/REQUEST',
  SUCCESS: 'tipos/SUCCESS',
  FAILURE: 'tipos/FAILURE',
  SELECTED: 'tipos/SELECTED',
  SEARCH_REQUEST: "tipos/REQUEST_SEARCH",
  SEARCH_SUCCESS: "tipos/REQUEST_SEARCH_SUCCESS",
  SEARCH_FAILED: "tipos/REQUEST_SEARCH_FAILED"
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  productSelected: {},
  data: [],
  loading: false,
  error: false,
  isFetchingSearch: false,
  search:[], 
  error_search: null  
};
export default function tipos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true, error: false };
    case Types.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.FAILURE:
      return { ...state, loading: false, error: true };
    case Types.SELECTED:
      navigate('Tamanhos');
      return { ...state, loading: false, productSelected: action.payload.data };
    case Types.SEARCH_REQUEST:
	  return { ...state, isFetchingSearch: false, search:[], error: null };	
    case Types.SEARCH_SUCCESS:
	  return { ...state, isFetchingSearch: false, search: action.payload.data, error_search: null }; 
    case Types.SEARCH_FAILED:
	  return { ...state, isFetchingSearch: false, search:[], error_search: action.payload.error };	
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  tiposRequest: () => ({
    type: Types.REQUEST,
  }),
  tiposSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  tiposFailure: () => ({
    type: Types.FAILURE,
  }),
  tiposSelected: data => ({
    type: Types.SELECTED,
    payload: { data },
  }),
  searchRequest: (search) => ({
    type: Types.SEARCH_REQUEST,
    payload: { search }
    
  }),
  searchSuccess: data => ({
    type: Types.SEARCH_SUCCESS,
    payload: { data }
  }),
  searchFailed: error => ({
    type: Types.SEARCH_FAILED,
    payload: { error }
  }),
};
