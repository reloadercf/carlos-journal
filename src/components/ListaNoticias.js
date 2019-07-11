import React from 'react';
import Noticia from './Noticia'

let ListaNoticias = ({noticias}) => (
    <div className='row'>
        {noticias.map(noticia=>(
            <Noticia 
            key={noticia.url}
            noticia={noticia}
            />
        ))}
    </div>
)
export default ListaNoticias