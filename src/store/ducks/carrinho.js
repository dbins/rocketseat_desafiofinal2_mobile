/**
 * Action Types
 */

export const Types = {
  ADD: 'carrinho/ADD',
  REMOVE: 'carrinho/REMOVE',
  CLEAR: 'carrinho/CLEAR',
  ADD_TO_ORDER: 'carrinho/ADD_TO_ORDER',
  FAILURE: 'carrinho/FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = { items: [], loading: false };
export default function carrinho(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { ...state, items: [...state.items, action.payload.data] };
    case Types.REMOVE:
      return {
        ...state,
        items: [...state.items.filter(item => item !== action.payload.item)],
      };
    case Types.CLEAR:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  carrinhoAdd: data => ({
    type: Types.ADD,
    payload: { data },
  }),
  carrinhoRemove: item => ({
    type: Types.REMOVE,
    payload: { item },
  }),
  carrinhoClear: data => ({
    type: Types.CLEAR,
    payload: { data },
  }),
  adicionarPedido: () => ({
    type: Types.ADD_TO_ORDER,
  }),
};
