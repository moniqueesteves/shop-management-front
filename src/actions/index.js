// import Axios from 'axios';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const increment = () => async (dispatch) => {
  dispatch({
    type: INCREMENT_COUNTER,
  });
};

export const incrementIfOdd = () => async (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch({
    type: INCREMENT_COUNTER,
  });
};

// const consumoDados = data => (dispatch) => {
//   axios
//     .post(
//       `${apiServerUrl}dashboard/consumoDados`,
//       { terminal: data.terminal },
//       {
//         headers: { 'x-cpf': data.cpf },
//       },
//     )
//     .then(response =>
//       dispatch({
//         type: CARD_CONSUMO_DADOS,
//         payload: response,
//       }),
//     );
// };

// module.exports = {
//   consumoDados,
// };
