import React, { Component } from 'react';
import './style.css';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
                  <li><a href="">Produtos</a></li>
                  <li><a href="#cadastrar">Cadastrar</a></li>
                  <li><a href="#contato">Contato</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>

    );
  }
}

