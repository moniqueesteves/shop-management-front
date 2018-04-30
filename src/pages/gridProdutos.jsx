import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import formatCurrencytoBr from 'format-currency-to-br';
import { salvarProduto, listarPorTipo } from '../actions/index';
import './style.css';
import { Menu } from './menu';

class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visivel: 'invisible',
      disabled: true,
      editarInputAmount: false,
      editarInputPrice: false,
      ocultarInput: 'invisible',
      ocultarLabel: 'visible',
      id: '',
      valorAmount: '',
      valorPrice: '',
      produto: '',
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const valoresMudaram = this.state.visivel !== nextState.visivel;

    if (valoresMudaram) {
      if (nextState.visivel === 'invisible') {
        this.handleHabilitarInput();
      } else {
        this.handleListaAtualizada();
      }
    }
  }

    handleHabilitarInput = (id) => {
      this.setState({ visivel: 'visible', id });
    }

    handleListaAtualizada = () => {
      this.setState({ visivel: 'atualizada' });
    }

    // handleLimparCampo = (tipo) => {
    //   if (tipo === 'amount') {
    //     this.setState({ editarInputAmount: true });
    //   } else {
    //     this.setState({ editarInputPrice: true });
    //   }
    // }

    handleEditarAmount = (event) => {
      const { value } = event.target;
      event.target.value = value;
      this.setState({ valorAmount: event.target.value });
    }

    handleEditarPrice = (event) => {
      const { value } = event.target;
      event.target.value = value;
      this.setState({ valorPrice: event.target.value });
    }

    handleSalvarAlteracoes = (id, name) => {
      const dados = {
        id,
        name,
        price: this.state.valorPrice,
        amount: this.state.valorAmount,
      };
      console.log('dados', dados);
      this.props.salvarProduto(id, name, this.state.valorPrice, this.state.valorAmount, this.props.itens.tipoProduto);
      // .then((response) => {
      //   if (response.payload.status === 200) {
      //     this.props.listarProdutoSelecionado(name);
      //   }
      // });
      this.setState({ visivel: 'invisible' });
      this.props.listarPorTipo(this.props.itens.tipoProduto);
    }

    render() {
      return (
        <div>
          <Menu />

          <div className="container">
            <div className="row">
              <section id="contato" className="col-sm-8">
                <h2>Hortifruti</h2>

                <div>
                  <div className="table-responsive" />
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col" />
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Produto</th>
                        <th scope="col">Estoque</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    {this.props.itens.listaPorTipo.map(item => (
                      <tbody>
                        {this.state.visivel === 'invisible' ?
                          <tr>
                            <th scope="row" />
                            {/* <td>{index}</td> */}
                            <td><label htmlFor="name"> {item.name}</label></td>
                            <td><label htmlFor="amount"> {item.amount }</label></td>
                            <td><label htmlFor="price"> {formatCurrencytoBr(item.price)}</label></td>
                            <td><button type="submit" className="btn btn-secondary" onClick={() => this.handleHabilitarInput(item.id)}>Editar</button></td>
                          </tr>
                          :
                          this.state.id === item.id ?
                            <tr>
                              <th scope="row" />
                              {/* <td>{index}</td> */}
                              <td><label htmlFor="name"> {item.name}</label></td>
                              <td><input
                                type="text"
                                className="input-amount"
                                maxLength="2"
                                value={this.state.valorAmount}
                                onChange={this.handleEditarAmount}
                                // onFocus={() => this.handleLimparCampo('amount')}
                              /></td>
                              <td><input
                                type="text"
                                maxLength="8"
                                className="input-price"
                                value={this.state.id === item.id ? this.state.valorPrice : ''}
                                onChange={this.handleEditarPrice}
                                //   onFocus={() => this.handleLimparCampo('price')}
                              /></td>
                              <td><button type="submit" className="btn btn-secondary" onClick={() => this.handleSalvarAlteracoes(item.id, item.name, item.amount, item.price)}>Salvar</button></td>
                            </tr> :
                            <tr>
                              <th scope="row" />
                              {/* <td>{index}</td> */}
                              <td><label htmlFor="name"> {item.name}</label></td>
                              <td><label htmlFor="amount"> {this.state.id === item.id ? this.state.valorAmount !== '' ? this.state.valorAmount : item.amount : item.amount}</label></td>
                              <td><label htmlFor="price"> {formatCurrencytoBr(this.state.valorPrice !== '' ? this.state.valorPrice : item.price) }</label></td>
                              <td><button type="submit" className="btn btn-secondary" onClick={() => this.handleHabilitarInput(item.id)}>Editar</button></td>
                            </tr>


                        }
                      </tbody>
                    ))}
                  </table>
                </div>
              </section>
            </div>

          </div>
        </div>

      );
    }
}

function mapStateToProps({ itens }) {
  return { itens };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    salvarProduto, listarPorTipo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
