import React, { Component } from 'react'
import InputSalario from './components/inputs/InputSalario';
import InputCalculos from './components/inputs/InputCalculos';
import { calculateSalaryFrom } from './helpers/salary.js';
import ProgressBar from './components/progressBar/ProgressBar';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salarioInicial: true,
      salarioCalculado: {
        baseINSS: '',
        discountINSS: '',
        baseIRPF: '',
        discountIRPF: '',
        netSalary: '',
        descontoPorceINSS: '',
        descontoPorceIRPF: '',
        salarioLiquidoPorce: '',
      },
    }

  }

  handleSalarioDigitado = (txtSalario) => {
    const salarioCalculado = calculateSalaryFrom(txtSalario);

    this.setState({
      salarioCalculado,
    });
  }
  

  componentDidMount() {
    this.setState({
      salarioInicial: false,
      salarioCalculado: calculateSalaryFrom(1000),
    });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {

    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary, descontoPorceINSS, descontoPorceIRPF, salarioLiquidoPorce } = this.state.salarioCalculado;

    return (
      <div className="container">
        <h3 className="center">React Salário</h3>
        <InputSalario
          salarioInicial={this.state.salarioInicial ? 1000 : baseINSS}
          onSalarioDigitado={this.handleSalarioDigitado} />

        <InputCalculos
          baseINSS={baseINSS}
          descontoINSS={discountINSS}
          descontoPorcentagemINSS={descontoPorceINSS}
          baseIRPR={baseIRPF}
          descontoIRPR={discountIRPF}
          descontoPorcentagemIRPR={descontoPorceIRPF}
          salarioLiquido={netSalary}
          salarioLiquidoPorcentagem={salarioLiquidoPorce}
        />
        <ProgressBar 
          porceINSS={descontoPorceINSS}
          porceIRPR={descontoPorceIRPF}
          porceSalario={salarioLiquidoPorce}
          />
      </div>
    )
  }
}
