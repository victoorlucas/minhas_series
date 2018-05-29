import React, { Component } from 'react';
import VerController from '../controllers/VerController'

class Ver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            atividade: {},
            carregando: true
        };
    }

    isCorrectRoute() {
        if (this.state.atividade) {
            return (
                this.state.atividade.nome
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    async carregar () {
        let data = await VerController.load(this.props.match.params.id)
        if(data.status){

        }else{
            
        }
    }

    componentDidMount() {
        this.carregar()
    }

    render() {
        return (
            <div>
                {(this.state.carregando) ? "carregando" : ""}
                {this.isCorrectRoute()}
            </div>
        );
    }
}

export default Ver;
