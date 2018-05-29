import React, { Component } from 'react'
import NovaController from '../controllers/NovaController'

class Nova extends Component {
    constructor(props) {
        super(props);
        this.state = { atividade: '' };

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

        NovaController.nova(data);
        
    }

    render() {
        return (
            <form onSubmit={this.novaAtividade}>
                <label>
                    Name:
              <input type="text" name="atividade" value={this.state.atividade} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Nova;