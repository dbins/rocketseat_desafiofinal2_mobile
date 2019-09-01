import { navigate } from '../../services/navigation';

/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'product/REQUEST',
  SUCCESS: 'product/SUCCESS',
  FAILURE: 'product/FAILURE',
  SELECTED: 'product/SELECTED',
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

export default function produto(state = INITIAL_STATE, action) {
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
      navigate('Tipos');
      return {
        ...state,
        loading: false,
        error: false,
        productSelected: action.payload.data,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  productRequest: () => ({
    type: Types.REQUEST,
  }),
  productSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  productFailure: () => ({
    type: Types.FAILURE,
  }),
  productSelected: data => ({
    type: Types.SELECTED,
    payload: { data },
  }),
};
