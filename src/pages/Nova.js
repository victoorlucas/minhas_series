import React, { Component } from 'react'
import NovaController from '../controllers/NovaController'

class Nova extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atividade: '',
            aviso: {
                texto: '',
                tipo: 0
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.novaAtividade = this.novaAtividade.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    novaAtividade(e){
        e.preventDefault();

        let data = {
            nome: this.state.atividade
        };

        if(this.state.atividade === ''){
            this.setState({ aviso: { texto: 'Preencha todos os campos', tipo: 0} });
        }else if(NovaController.nova(data)){
            this.setState({ aviso: { texto: 'Criado com sucesso!', tipo: 1} });
        }
    }

    render() {
        return (
            <div className="content">
                <div className="container">

                    <div className={(this.state.aviso.tipo === 1) ? 'has-text-success' : 'has-text-danger'}>{this.state.aviso.texto}</div>

                    <form onSubmit={this.novaAtividade}>
                        <div className="field">
                            <label className="field-label">Série ou anime</label>
                            <div className="control">
                                <input
                                    type="text"
                                    name="atividade"
                                    className="input"
                                    value={this.state.atividade}
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <input
                            type="submit"
                            className="button"
                            value="Submeter" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Nova;