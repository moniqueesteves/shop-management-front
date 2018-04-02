import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listarItens } from '../actions/index';
import './style.css';

class Produtos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Teste',
      visivel: 'invisible',
      disabled: true,
      editarInput: false,
    };
  }

  componentWillMount() {
    this.props.listarItens({});
  }

  componentWillUpdate(nextProps, nextState) {
    const valoresMudaram = this.state.disabled !== nextState.disabled;

    if (valoresMudaram) {
      if (nextState.disabled !== true) {
        this.handleHabilitarInput();
      }
    }
  }

    handleClickListar = () => {
      this.setState({ visivel: '' });
    }

    handleHabilitarInput = () => {
      this.setState({ disabled: false });
    }

    handleLimparCampo = () => {
      this.setState({ editarInput: true });
    }

    exibeTabela = () => (
      <div className={this.state.visivel}>
        <table className="table table-hover table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tipo</th>
              <th scope="col">Nome</th>
              <th scope="col">Quantidade</th>
            </tr>
          </thead>
          {this.props.itens.lista.map((item, index) => (
            <tbody>
              <tr>
                <th scope="row" />
                <td>{index}</td>
                <td>{item.type}</td>
                <td><input type="text" value={this.state.editarInput === true ? '' : item.name} disabled={this.state.disabled} onFocus={this.handleLimparCampo} /></td>
                <td><input type="text" value={this.state.editarInput === true ? '' : item.amount} disabled={this.state.disabled} onFocus={this.handleLimparCampo} /></td>
                <td><button className="btn btn-default center-block" onClick={this.handleHabilitarInput}>Editar</button></td>
                <td><button className="btn btn-default center-block">Excluir</button></td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    )


    render() {
      return (
        <div>
          <header>
            <nav className="navbar navbar-default">
              <div className="container">

                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-navbar" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>

                  <a className="navbar-brand" href="">Gerenciamento de dispensa</a>
                </div>

                <div className="collapse navbar-collapse" id="collapse-navbar">
                  <ul className="nav navbar-nav">
                    <li><a href="#nossos-projetos">Nossos Projetos</a></li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="#contato">Contato</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>

          <div className="container">
            <div className="row">
              <section id="contato" className="col-sm-8">
                <h2>Hortifruti</h2>

                <div className="table-responsive" />
                <table className="table table-hover">
                  <thead>
                    <tr>

                      <th scope="col">Produto</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Leite condensado</td>
                      <td>1</td>
                      <td>RS10,00</td>
                      <td><button type="submit" className="btn btn-secondary">Editar</button></td>
                    </tr>
                    <tr>

                      <td>Jacob</td>
                      <td>2</td>
                      <td>RS10,00</td>
                      <td><button type="submit" className="btn btn-secondary">Editar</button></td>
                    </tr>
                    <tr>

                      <td>Larry</td>
                      <td>2</td>
                      <td>RS10,00</td>
                      <td><button type="submit" className="btn btn-secondary">Editar</button></td>
                    </tr>
                    <tr>

                      <td>Mark</td>
                      <td>3</td>
                      <td>RS10,00</td>
                      <td><button type="submit" className="btn btn-secondary">Editar</button></td>
                    </tr>
                    <tr>

                      <td>Mark</td>
                      <td>5</td>
                      <td>RS10,00</td>
                      <td><button type="submit" className="btn btn-secondary">Editar</button></td>
                    </tr>
                  </tbody>
                </table>
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
    listarItens,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
