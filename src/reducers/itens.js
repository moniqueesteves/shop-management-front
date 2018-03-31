import { LISTAR_ITENS } from '../actions';

export default function (state = { lista: [] }, action) {
  switch (action.type) {
    case LISTAR_ITENS:
      return {
        ...state,
        lista: action.payload.data,
      };
    default:
      return state;
  }
}

