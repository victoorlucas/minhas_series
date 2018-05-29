import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'

class Inicio extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  renderizar() {
    let items = [];

    for (let i in this.state.list) {
      items.push(
        <Link to={'/ver/'+i} key={i}>
          <li>{this.state.list[i].nome}</li>
        </Link>
      );
    }

    return (
      <ul className="items">{items}</ul>
    )
  }

  componentDidMount() {
    let ref = firebase.database().ref('atividades');
    ref.on('value', snap => {
      this.setState({ list: snap.val() })
    }, err => {
      console.error(err)
    })

  }

  render() {
    return (
      <div>
        <Link to="/nova">Nova atividade</Link>
        <h1>Atividades existentes:</h1>
        {this.renderizar()}
      </div>
    );
  }
}

export default Inicio;
