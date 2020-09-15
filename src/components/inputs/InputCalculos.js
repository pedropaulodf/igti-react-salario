import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers.js'
import css from './input.module.css';

export default class InputCalculos extends Component {
  render() {
    const { baseINSS, descontoINSS, baseIRPR, descontoIRPR, salarioLiquido, descontoPorcentagemINSS, descontoPorcentagemIRPR, salarioLiquidoPorcentagem } = this.props;

    return (
      <div className="row">
        <div className="col s12 m3">
          <label>Base INSS</label>
          <input
            type="text"
            value={`R$ ${formatNumber(baseINSS)}`} placeholder="Base INSS"
            readOnly />
        </div>

        <div className="col s12 m3">
          <label>Desconto INSS</label>
          <input
            type="text"
            value={`R$ ${formatNumber(descontoINSS)} (${formatNumber(descontoPorcentagemINSS)}%)`}
            placeholder="Desconto INSS"
            className={css.orange}
            readOnly />
        </div>

        <div className="col s12 m3">
          <label>Base IRPR</label>
          <input
            type="text"
            value={`R$ ${formatNumber(baseIRPR)}`}
            placeholder="Base IRPR"
            readOnly />
        </div>


        <div className="col s12 m3">
          <label>Desconto IRPR</label>
          <input
            type="text"
            value={`R$ ${formatNumber(descontoIRPR)} (${formatNumber(descontoPorcentagemIRPR)}%)`}
            placeholder="Desconto IRPR"
            className={css.red}
            readOnly />
          </div>


        <div className="col s12 m5">
          <label>Salário Líquido</label>
          <input
            type="text"
            value={`R$ ${formatNumber(salarioLiquido)} (${formatNumber(salarioLiquidoPorcentagem)}%)`}
            placeholder="Salário Líquido"
            className={css.green}
            readOnly />
        </div>

      </div>
    )
  }
}
