import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listarPorTipo } from '../actions/index';
import './style.css';
import { Menu } from './menu';
// import { Contato } from './contato';
import { Footer } from './footer';
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

  listarProdutoSelecionado = (type) => {
    this.props.listarPorTipo(type);
    history.push('/produtos');
  }


  cardHortifruti = () => (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <button onClick={() => this.listarProdutoSelecionado('hortifruti')} className="button-card">
        <figure className="thumbnail">
          <img src={cardHortifruti} alt="" />
          <figcaption className="caption">
            <h3>Hortifruti</h3>
          </figcaption>
        </figure>
      </button>
    </div>)

    cardPaesBolos = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('massas')} className="button-card">
          <figure className="thumbnail">
            <img src={cardPaes} alt="" />
            <figcaption className="caption">
              <h3>Pães e Bolos</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardFriosLaticinios =() => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('frios')} className="button-card">
          <figure className="thumbnail">
            <img src={cardFrios} alt="" />
            <figcaption className="caption">
              <h3>Frios e Laticínios</h3>
            </figcaption>
          </figure>
        </button>
      </div>

    )

    cardCarnesPeixes =() => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('carnes')} className="button-card">
          <figure className="thumbnail">
            <img src={cardCarnes} alt="" />
            <figcaption className="caption">
              <h3>Carnes e Peixes</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardMassas = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('massas')} className="button-card">
          <figure className="thumbnail">
            <img src={cardMassas} alt="" />
            <figcaption className="caption">
              <h3>Massas</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardBiscoitos = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('biscoitos')} className="button-card">
          <figure className="thumbnail">
            <img src={cardBiscoitos} alt="" />
            <figcaption className="caption">
              <h3>Biscoitos e Snacks</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardBebidas = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('bebidas')} className="button-card">
          <figure className="thumbnail">
            <img src={cardBebidas} alt="" />
            <figcaption className="caption">
              <h3>Bebidas</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardPerfumariaHigiene = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('perfumaria')} className="button-card">
          <figure className="thumbnail">
            <img src={cardPerfumaria} alt="" />
            <figcaption className="caption">
              <h3>Perfumaria e Higiene</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardLimpeza = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('limpeza')} className="button-card">
          <figure className="thumbnail">
            <img src={cardLimpeza} alt="" />
            <figcaption className="caption">
              <h3>Limpeza</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardOleosTemperos = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('oleosTemperos')} className="button-card">
          <figure className="thumbnail">
            <img src={cardTemperos} alt="" />
            <figcaption className="caption">
              <h3>Óleos e Temperos</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardCongelados = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('congelados')} className="button-card">
          <figure className="thumbnail">
            <img src={cardCongelados} alt="" />
            <figcaption className="caption">
              <h3>Congelados</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )

    cardUtilidades = () => (
      <div className="col-sm-6 col-md-4 col-lg-3">
        <button onClick={() => this.listarProdutoSelecionado('utilidades')} className="button-card">
          <figure className="thumbnail">
            <img src={cardUtilidades} alt="" />
            <figcaption className="caption">
              <h3>Utilidades</h3>
            </figcaption>
          </figure>
        </button>
      </div>
    )


    render() {
      return (
        <div>
          <Menu />

          <section id="" className="container">
            <h2>Produtos</h2>

            <div className="row">
              {this.cardHortifruti()}

              {this.cardPaesBolos()}

              {this.cardFriosLaticinios()}

              {this.cardCarnesPeixes()}

              {this.cardMassas()}

              {this.cardBiscoitos()}

              {this.cardBebidas()}

              {this.cardPerfumariaHigiene()}

              {this.cardLimpeza()}

              {this.cardOleosTemperos()}

              {this.cardCongelados()}

              {this.cardUtilidades()}

            </div>
          </section>

          <br /><br /><br />

          {/* <Contato /> */}

          <Footer />


        </div>

      );
    }
}

function mapStateToProps({ itens }) {
  return { itens };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    listarPorTipo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
