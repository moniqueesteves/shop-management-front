import { LISTAR_ITENS, LISTAR_POR_TIPO } from '../actions';

export default function (state = { listaPorTipo: [] }, action) {
  switch (action.type) {
    case LISTAR_ITENS:
      return {
        ...state,
        lista: action.payload.data,
      };
    case LISTAR_POR_TIPO:
      console.log('reducer tipo', action.payload);
      return {
        ...state,
        listaPorTipo: action.payload.data,
      };
    default:
      return state;
  }
}

