import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listarItens } from '../actions/index';
import './style.css';
import history from '../history';

import cardHortifruti from '../assets/images/card-hortifruti.png';
import cardPaes from '../assets/images/card-paes.png';
import cardFrios from '../assets/images/card-frios.png';
import cardCarnes from '../assets/images/card-carnes.png';
import cardMassas from '../assets/images/card-massas.png';
import cardBiscoitos from '../assets/images/card-biscoitos.png';
import cardBebidas from '../assets/images/card-bebidas.png';
import cardPerfumaria from '../assets/images/card-perfumaria.png';
import cardLimpeza from '../assets/images/card-limpeza.png';
import cardTemperos from '../assets/images/card-temperos.png';
import cardCongelados from '../assets/images/card-congelados.png';
import cardUtilidades from '../assets/images/card-utilidades.png';


class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  listarProdutoSelecionado = () => {
    this.props.listarItens();
    history.push('/produtos');
  }

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
                  <li><a href="#nossos-projetos">Produtos</a></li>
                  <li><a href="#depoimentos">Cadastrar</a></li>
                  <li><a href="#contato">Contato</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section id="nossos-projetos" className="container">
          <h2>Produtos</h2>

          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <button onClick={this.listarProdutoSelecionado} className="button-card">
                <figure className="thumbnail">
                  <img src={cardHortifruti} alt="" />
                  <figcaption className="caption">
                    <h3>Hortifruti</h3>
                  </figcaption>
                </figure>
              </button>
            </div>

            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardPaes} alt="" />
                <figcaption className="caption">
                  <h3>Pães e Bolos</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardFrios} alt="" />
                <figcaption className="caption">
                  <h3>Frios e Laticínios</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardCarnes} alt="" />
                <figcaption className="caption">
                  <h3>Carnes e Peixes</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardMassas} alt="" />
                <figcaption className="caption">
                  <h3>Massas</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardBiscoitos} alt="" />
                <figcaption className="caption">
                  <h3>Biscoitos e Snacks</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardBebidas} alt="" />
                <figcaption className="caption">
                  <h3>Bebidas</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardPerfumaria} alt="" />
                <figcaption className="caption">
                  <h3>Perfumaria e Higiene</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardLimpeza} alt="" />
                <figcaption className="caption">
                  <h3>Limpeza</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardTemperos} alt="" />
                <figcaption className="caption">
                  <h3>Óleos e Temperos</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardCongelados} alt="" />
                <figcaption className="caption">
                  <h3>Congelados</h3>
                </figcaption>
              </figure>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <figure className="thumbnail">
                <img src={cardUtilidades} alt="" />
                <figcaption className="caption">
                  <h3>Utilidades</h3>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <br /><br /><br />

        <div className="container">
          <div className="row">
            <section id="contato" className="col-sm-6">
              <h2>Contato</h2>
              <h4>Entre em contato conosco</h4>

              <form>
                <div className="form-group">
                  <label htmlFor="contato-nome">Nome:</label>
                  <input id="contato-nome" className="form-control" type="text" placeholder="Seu nome" />
                </div>

                <div className="form-group">
                  <label htmlFor="contato-email">E-mail:</label>
                  <div className="input-group">
                    <div className="input-group-addon">@</div>
                    <input id="contato-email" className="form-control" type="email" placeholder="Seu e-mail" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>

              </form>
            </section>
          </div>
        </div>

        <footer>
          <address>
            <strong>Gerenciamento de dispensa</strong><br />
          </address>
          <address>
          E-mail: gerenciamentodispensa@gmail.com
          </address>
        </footer>
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
