/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'cadastro/REQUEST',
  SUCCESS: 'cadastro/SUCCESS',
  FAILURE: 'cadastro/FAILURE',
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  user: {},
  loading: false,
  msg_error: false,
  error: false,
};

export default function cadastro(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true, error: false };
    case Types.SUCCESS:
      return { ...state, loading: false, error: false };
    case Types.FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

/**
 * ACTION CREATORS
 */

export const Creators = {
  cadastroRequest: user => ({
    type: Types.REQUEST,
    payload: { user },
  }),
  cadastroSuccess: () => ({
    type: Types.SUCCESS,
  }),
  cadastroFailure: () => ({
    type: Types.FAILURE,
  }),
};
