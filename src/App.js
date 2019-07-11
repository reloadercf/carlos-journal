import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import ListaNoticias from './components/ListaNoticias'
import Formulario from './components/Formulario'

class App extends Component {
  state = {
    noticias: []
  }

  componentDidMount() {
    this.consultarNoticias()
  }

  consultarNoticias = async (categoria='general') => {

    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=0285998a7c0c4d59a4d98f7f55361c5f`

    let respuesta = await fetch(url)
    let noticias = await respuesta.json()

    this.setState({ noticias: noticias.articles })

  }
  render() {
    return (
      <Fragment>
        <Header
        titutlo='Noticias'
        />
        <h1>News in Real Time</h1>
        <Formulario
          consultarNoticias={this.consultarNoticias}
         />
        <div className='container white contenedor-noticias'>
          <ListaNoticias 
            noticias={this.state.noticias}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;

