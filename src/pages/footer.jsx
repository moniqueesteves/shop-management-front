import React, { Component } from 'react';
import './style.css';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
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
