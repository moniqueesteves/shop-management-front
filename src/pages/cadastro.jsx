import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import formatCurrencytoBr from 'format-currency-to-br';
import './style.css';
import { Menu } from './menu';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            <section id="cadastro" className="col-sm-6">
              <h2>Cadastre um produto:</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="tipo">Tipo do Produto:</label>
                  <select className="form-control">
                    <option>Massas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="produto">Produto:</label>
                  <input id="produto" className="form-control" type="text" maxLength="25" placeholder="Produto" />
                </div>


                <div className="form-group">
                  <label htmlFor="amount">Estoque:</label>
                  <input id="amount" className="form-control" type="text" maxLength="2" pattern="([0-9]{2})" placeholder="Estoque" />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Preço:</label>
                  <input id="price" className="form-control" type="text" maxLength="25" placeholder="Preço" />
                </div>

                <button type="submit" className="btn btn-primary">Adicionar</button>

              </form>
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
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
