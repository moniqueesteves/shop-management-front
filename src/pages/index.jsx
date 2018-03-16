import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Fruta from '../assets/images/fruta.png';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Teste',
    };
  }

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
            <div className="card-header bg-primary text-white">
              <img alt="Frutas" src={Fruta} />
            </div>
            <div className="card-body bg-success text-white" />
            <div className="card-footer bg-warning text-white" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ example: state.example });
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Page);
