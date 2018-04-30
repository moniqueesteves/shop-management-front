import axios from 'axios';

export const LISTAR_ITENS = 'LISTAR_ITENS';
export const LISTAR_POR_TIPO = 'LISTAR_POR_TIPO';
export const SALVAR_PRODUTO = 'SALVAR_PRODUTO';
export const ARMAZENAR_TIPO = 'ARMAZENAR_TIPO';

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

export const listarPorTipo = type => (dispatch) => {
  axios
    .get(
      `http://localhost:8080/products/${type}`,
      { type },
      {
        headers: {},
      },
    )
    .then(response =>
      dispatch({
        type: LISTAR_POR_TIPO,
        payload: response,
      }),
    );
};

export const salvarProduto = (id, name, price, amount, type) => (dispatch) => {
  axios
    .post(
      'http://localhost:8080/products',
      { name, price, amount, type },
      {
        headers: {},
      },
    ).then(() =>
      axios
        .delete(
          `http://localhost:8080/products/${id}`,
          { id },
          {
            headers: {},
          },
        ),
    )
    .then(response =>
      dispatch({
        type: SALVAR_PRODUTO,
        payload: response,
      }),
    );
};

export const armazenarTipo = type => (dispatch) => {
  dispatch({
    type: ARMAZENAR_TIPO,
    payload: type,
  });
};

