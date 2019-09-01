import { navigate } from '../../services/navigation';
/**
 * Action Types
 */

export const Types = {
  REQUEST: 'tipos/REQUEST',
  SUCCESS: 'tipos/SUCCESS',
  FAILURE: 'tipos/FAILURE',
  SELECTED: 'tipos/SELECTED',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  productSelected: {},
  data: [],
  loading: false,
  error: false,
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
};
