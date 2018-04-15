import React, { Component } from 'react';
import './style.css';

export default class Contato extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
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

    );
  }
}
