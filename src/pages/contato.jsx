import React, { Component } from 'react';
import './style.css';
import { Menu } from './menu';

export default class Contato extends Component {
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
            <section id="contato" className="col-sm-6">
              <h2>Contato</h2>
              <h4>Entre em contato conosco</h4>

              <form>
                <div className="form-group">
                  <label htmlFor="contato-nome">Nome:</label>
                  <input id="contato-nome" className="form-control" type="text" maxLength="25" placeholder="Seu nome" />
                </div>

                <div className="form-group">
                  <label htmlFor="contato-mensagem">Mensagem:</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" maxLength="150" />
                </div>

                <div className="form-group">
                  <label htmlFor="contato-email">E-mail:</label>
                  <div className="input-group">
                    <div className="input-group-addon">@</div>
                    <input id="contato-email" className="form-control" type="email" placeholder="Seu e-mail" maxLength="30" />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>

              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
