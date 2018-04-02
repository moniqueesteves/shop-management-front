import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fruta from '../assets/images/fruta.png';
import { listarItens } from '../actions/index';

class Page extends Component {
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
        <div id="principal" className="container-fluid" >
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-md navbar-dark navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="">
                  <img src="/assets/icons/carrinho.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                  {this.state.hello}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="">Disabled</a>
                    </li>
                  </ul>
                  <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div >
                <button onClick={this.handleClickListar}>
                  <img alt="Frutas" src={Fruta} />
                </button>
              </div>
              {this.exibeTabela()}
              <div />
              {/* <div className="card-body bg-success text-white" />
            <div className="card-footer bg-warning text-white" /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
