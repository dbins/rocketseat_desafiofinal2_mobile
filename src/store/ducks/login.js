/**
 * ACTION TYPES
 */

export const Types = {
  REQUEST: 'login/REQUEST',
  SUCCESS: 'login/SUCCESS',
  FAILURE: 'login/FAILURE',
  REQUEST_SOCIAL: 'login/REQUEST_SOCIAL',
  LOGOUT: 'login/LOGOUT',
};

/**
 * Reducers
 */

const INITIAL_STATE = { loading: false, error: false };

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true, error: false };
    case Types.REQUEST_SOCIAL:
      return { ...state, loading: true, error: false };

    case Types.SUCCESS:
      return { ...state, loading: false, error: false };

    case Types.FAILURE:
      return { ...state, loading: false, error: true };
	  
	 case Types.LOGOUT:
      return { ...state, loading: false, error: false };  

    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  loginRequest: user => ({
    type: Types.REQUEST,
    payload: { user },
  }),
  loginRequestSocial: user => ({
    type: Types.REQUEST_SOCIAL,
    payload: { user },
  }),
  loginSuccess: () => ({
    type: Types.SUCCESS,
  }),
  loginFailure: () => ({
    type: Types.FAILURE,
  }),
  logout: () => ({
    type: Types.LOGOUT,
  }),
};
