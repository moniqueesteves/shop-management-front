import { INCREMENT_COUNTER } from '../actions';

const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: (state.count + 1) };
    // case CARD_CONSUMO_DADOS:
    //   if (action.payload.status === 200) {
    //     console.log('reducer', action.payload.data);
    //     return {
    //       ...state,
    //       dataCorrente: action.payload.data.dataCorrente,
    //       dataRenova: action.payload.data.renovacao,
    //       totalDisponivel: action.payload.data.totalDisponivel,
    //       totalConsumido: action.payload.data.totalConsumido,
    //       consumoSugerido: action.payload.data.consumoSugerido,
    //       percentualDisponivel: action.payload.data.percentualDisponivel,
    //       percentualConsumido: action.payload.data.percentualConsumido,
    //     };
    //   }
    //   return state;
    default:
      return state;
  }
}
