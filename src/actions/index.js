import axios from 'axios';

export const LISTAR_ITENS = 'LISTAR_ITENS';
export const LISTAR_POR_TIPO = 'LISTAR_POR_TIPO';
export const SALVAR_PRODUTO = 'SALVAR_PRODUTO';

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

export const salvarProduto = dados => (dispatch) => {
  axios
    .get(
      `http://localhost:8080/products/${type}`,
      { dados },
      {
        headers: {},
      },
    )
    .then(response =>
      dispatch({
        type: SALVAR_PRODUTO,
        payload: response,
      }),
    );
};

