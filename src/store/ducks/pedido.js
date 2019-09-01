/**
 * Action Types
 */

export const Types = {
  SET_ORDER: 'pedido/SET_ORDER',
  SET_PRODUCTS: 'pedido/SET_PRODUCTS',
  SET_OBSERVATION: 'pedido/SET_OBSERVATION',
  SET_STREET: 'pedido/SET_STREET',
  SET_NUMBER: 'pedido/SET_NUMBER',
  SET_UF: 'pedido/SET_UF',
  SET_DISTRICT: 'pedido/SET_DISTRICT',
  SET_CITY: 'pedido/SET_CITY',
  SET_FORMA_PAGAMENTO: 'pedido/SET_FORMA_PAGAMENTO',
  CEP_REQUEST: 'pedido/CEP_REQUEST',
  CEP_RESPONSE: 'pedido/CEP_RESPONSE',
  REQUEST: 'pedido/REQUEST',
  RESPONSE: 'pedido/RESPONSE',
  FAILURE: 'pedido/FAILURE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  produtos: [],
  endereco: {
    rua: '',
    numero: '',
    bairro: 'teste',
    cidade: '',
    uf: '',
    cep: '00000000',
  },
  observacao: '',
  valor: 0,
  forma_pagamento: '',
  loading: false,
  error: false,
};

export default function pedido(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_ORDER:
      return {
        ...state,
        produtos: action.payload.data.produtos,
        valor: action.payload.data.valor,
      };
    case Types.SET_PRODUCTS:
      return { ...state, produtos: action.payload.data };
    case Types.SET_OBSERVATION:
      return { ...state, observacao: action.payload.data };
    case Types.SET_STREET:
      return {
        ...state,
        endereco: { ...state.endereco, rua: action.payload.data },
      };
    case Types.SET_NUMBER:
      return {
        ...state,
        endereco: { ...state.endereco, numero: action.payload.data },
      };
    case Types.SET_CITY:
      return {
        ...state,
        endereco: { ...state.endereco, cidade: action.payload.data },
      };
    case Types.SET_DISTRICT:
      return {
        ...state,
        endereco: { ...state.endereco, bairro: action.payload.data },
      };
    case Types.SET_FORMA_PAGAMENTO:
      return {
        ...state,
        forma_pagamento: action.payload.data,
      };
    case Types.SET_UF:
      return {
        ...state,
        endereco: { ...state.endereco, uf: action.payload.data },
      };
    case Types.CEP_REQUEST:
      return { ...state, loading: true };
    case Types.CEP_RESPONSE:
      return { ...state, loading: false, endereco: action.payload.data };
    case Types.REQUEST:
      return { ...state, loading: true, error: false };
    case Types.FAILURE:
      return { ...state, loading: false, error: true };
    case Types.RESPONSE:
      return INITIAL_STATE;
    case Types.SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  setProdutos: data => ({
    type: Types.SET_PRODUCTS,
    payload: { data },
  }),
  setObservacao: data => ({
    type: Types.SET_OBSERVATION,
    payload: { data },
  }),
  setRua: data => ({
    type: Types.SET_STREET,
    payload: { data },
  }),
  setNumero: data => ({
    type: Types.SET_NUMBER,
    payload: { data },
  }),
  setCidade: data => ({
    type: Types.SET_CITY,
    payload: { data },
  }),
  setBairro: data => ({
    type: Types.SET_DISTRICT,
    payload: { data },
  }),
  setUF: data => ({
    type: Types.SET_UF,
    payload: { data },
  }),
  setFormaPagamento: data => ({
    type: Types.SET_FORMA_PAGAMENTO,
    payload: { data },
  }),
  cepRequest: cep => ({
    type: Types.CEP_REQUEST,
    payload: { cep },
  }),
  cepResponse: data => ({
    type: Types.CEP_RESPONSE,
    payload: { data },
  }),
  pedidoRequest: () => ({
    type: Types.REQUEST,
  }),
  pedidoResponse: () => ({
    type: Types.RESPONSE,
  }),
  pedidoFailure: () => ({
    type: Types.FAILURE,
  }),
};
