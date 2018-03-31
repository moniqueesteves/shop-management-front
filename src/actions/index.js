import axios from 'axios';
// import apiServerUrl from '../../config/env.config';

// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// export const increment = () => async (dispatch) => {
//   dispatch({
//     type: INCREMENT_COUNTER,
//   });
// };

// export const incrementIfOdd = () => async (dispatch, getState) => {
//   const { counter } = getState();

//   if (counter % 2 === 0) {
//     return;
//   }

//   dispatch({
//     type: INCREMENT_COUNTER,
//   });
// };
export const LISTAR_ITENS = 'LISTAR_ITENS';
// console.log('reducer >>>>>', listarItens);
export const listarItens = () => (dispatch) => {
  axios
    .get(
      'http://localhost:8080/products',
      {},
      {
        headers: {},
      },
    )
    .then(response =>
      dispatch({
        type: LISTAR_ITENS,
        payload: response,
      }),
    );
};

// module.exports = {
//   listarItens,
// };
