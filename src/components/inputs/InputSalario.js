import React, { Component } from 'react'

export default class InputSalario extends Component {

  handleSalarioDigitado = (event) => {
    const salarioDigitado = event.target.value;
    this.props.onSalarioDigitado(salarioDigitado);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <input type="number" step="100" value={this.props.salarioInicial || ''} placeholder="Digite o salário" onChange={this.handleSalarioDigitado} />
        </div>
      </div>
    )
  }
}
