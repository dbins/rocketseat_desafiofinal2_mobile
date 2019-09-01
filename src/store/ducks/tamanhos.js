/**
 * Action Types
 */

export const Types = {
  REQUEST: 'tamanho/REQUEST',
  SUCCESS: 'tamanho/SUCCESS',
  FAILURE: 'tamanho/FAILURE',
  SELECTED: 'tamanho/SELECTED',
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
export default function tamanhos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
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
  tamanhoRequest: () => ({
    type: Types.REQUEST,
  }),
  tamanhoSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  tamanhoFailure: () => ({
    type: Types.FAILURE,
  }),
  tamanhoSelected: data => ({
    type: Types.SELECTED,
    payload: { data },
  }),
};
