import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import formatCurrencytoBr from 'format-currency-to-br';
// import { salvarProduto } from '../actions/index';
import './style.css';
import { Menu } from './menu';

class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Teste',
      visivel: 'invisible',
      disabled: true,
      editarInputAmount: false,
      editarInputPrice: false,
      ocultarInput: 'invisible',
      ocultarLabel: 'visible',
      id: '',
    };
  }

  componentWillUpdate(nextProps, nextState) {
    const valoresMudaram = this.state.visivel !== nextState.visivel;

    if (valoresMudaram) {
      if (nextState.visivel !== 'visible') {
        this.handleHabilitarInput();
      }
    }
  }

    handleHabilitarInput = (id) => {
      this.setState({ visivel: 'visible', id });
    }

    handleLimparCampo = (tipo) => {
      if (tipo === 'amount') {
        this.setState({ editarInputAmount: true });
      } else {
        this.setState({ editarInputPrice: true });
      }
    }

    handleEditar = (e) => {
      const { value } = e.target;
      e.target.value = value;
    }

    handleSalvarAlteracoes = () => {
    //  this.props.salvarProduto(amount, price);
      this.setState({ visivel: 'invisible' });
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
                        <th scope="col">#</th>
                        <th scope="col">Produto</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Ações</th>
                      </tr>
                    </thead>
                    {this.props.itens.listaPorTipo.map((item, index) => (
                      <tbody>
                        {this.state.visivel === 'invisible' ?
                          <tr>
                            <th scope="row" />
                            <td>{index}</td>
                            <td><label htmlFor="name"> {item.name}</label></td>
                            <td><label htmlFor="amount"> {item.amount}</label></td>
                            <td><label htmlFor="price"> {formatCurrencytoBr(item.price)}</label></td>
                            <td><button type="submit" className="btn btn-secondary" onClick={() => this.handleHabilitarInput(item.id)}>Editar</button></td>
                          </tr>
                          :
                          this.state.id === item.id ?
                            <tr>
                              <th scope="row" />
                              <td>{index}</td>
                              <td><label htmlFor="name"> {item.name}</label></td>
                              <td><input
                                type="text"
                                value={this.state.editarInputAmount === true ? null : item.amount}
                                onChange={this.handleEditar}
                                onFocus={() => this.handleLimparCampo('amount')}
                              /></td>
                              <td><input
                                type="text"
                                value={this.state.editarInputPrice === true ? null : formatCurrencytoBr(item.price)}
                                onChange={this.handleEditar}
                                onFocus={() => this.handleLimparCampo('price')}
                              /></td>
                              <td><button type="submit" className="btn btn-secondary" onClick={() => this.handleSalvarAlteracoes()}>Salvar</button></td>
                            </tr> :
                            <tr>
                              <th scope="row" />
                              <td>{index}</td>
                              <td><label htmlFor="name"> {item.name}</label></td>
                              <td><label htmlFor="amount"> {item.amount}</label></td>
                              <td><label htmlFor="price"> {formatCurrencytoBr(item.price)}</label></td>
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
    //    salvarProduto,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
