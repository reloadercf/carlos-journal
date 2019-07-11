import React,{Component} from 'react'

class Formulario extends Component {
    state = { 
        categoria:''
     }
     componentDidMount(){
         this.setState({
             categoria:'general'
         })
         
     }

     cambiarCategoria=e=>{
        this.setState({
            categoria:e.target.value
        },()=>{
            //callback
        //pasarlo a la pagina general para que haga la noticia
        this.props.consultarNoticias(this.state.categoria)
        })
        
     }

    render() { 
        return ( 
            <div className='buscador row'>
                <div className='col s12 m8 offset-2'>
                    <form>
                        <h2>Encuentra noticias</h2>
                        <div className='input-field col s12 m8'>
                            <select
                                onChange={this.cambiarCategoria}
                            >
                                <option value='general'>General</option>
                                <option value='business'>Negocios</option>
                                <option value='science'>Ciencia</option>
                                <option value='technology'>Tecnologia</option>
                                <option value='entertainment'>Entretenimiento</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Formulario;