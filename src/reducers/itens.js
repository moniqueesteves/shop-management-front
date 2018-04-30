import { LISTAR_ITENS, LISTAR_POR_TIPO, SALVAR_PRODUTO, ARMAZENAR_TIPO } from '../actions';

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
    case SALVAR_PRODUTO:
      console.log('reducer SALVAR_PRODUTO', action.payload);
      return {
        ...state,
        produtoInserido: true,
      };
    case ARMAZENAR_TIPO:
      return {
        ...state,
        tipoProduto: action.payload,
      };
    default:
      return state;
  }
}

