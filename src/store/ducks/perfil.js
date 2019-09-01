/**
 * Action Types
 */

export const Types = {
  REQUEST: 'perfil/REQUEST',
  SUCCESS: 'perfil/RESPONSE',
  FAILURE: 'perfil/FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = { data: [], loading: false, error: false };

export default function perfil(state = INITIAL_STATE, action) {
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
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  perfilRequest: () => ({
    type: Types.REQUEST,
  }),
  perfilSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  perfilFailure: () => ({
    type: Types.FAILURE,
  }),
};
