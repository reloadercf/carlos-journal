import React from 'react';

let Noticia = ({ noticia }) => {
    //extraer los datos
    let { urlToImage, url, title, description, source } = noticia

    //condicionalmente cargar la imagen si esta disponible
    let imagen = (urlToImage) ?
        <div className='card-image'>
            <img src={urlToImage} alt={title} />
        </div>
        : null
    return (
        <div className='col s12 m6 l4'>
            <div className='card'>
                {imagen}
                <div className='card-title'><span>@{source.name}</span></div>
                
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a className='waves-effect waves-light btn' href={url} target='_blank' rel="noopener noreferrer">
                        Leer Noticia...
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Noticia