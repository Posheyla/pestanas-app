import React, {useState} from 'react';
import './Pestanas.css';

const Pestanas = (props) => {

    const [pestanas, setPestanas] = useState([{
        contenido: 'Soy la pestaña uno',
        titulo: 'Pestana1',
        status: '',
    },
    {
        contenido: 'Soy la pestaña dos',
        titulo: 'Pestana2',
        status: 'active'

    },
    {
        contenido: 'Soy la pestaña tres',
        titulo: 'Pestana3',
        status: ''

    }]);

    const cambiarActivo=(item,i)=>{

        let nuevaPestanas = pestanas.map(pestana => {
            
            pestana.titulo === pestanas[i].titulo ? pestana.status = 'active' : pestana.status = '';
            return pestana;
        });
        setPestanas(nuevaPestanas);
    }   
    
    return (
        <div className='pestanacontainer'>

            <div className="titulos">
            {pestanas.map((item, i) =>
                <a key={i} className={item.status} onClick={() => cambiarActivo(item, i)} > {item.titulo} </a>
                )}
            </div>
            <div className="content">
                {pestanas.filter(item=>item.status==='active').map((item,i)=><p key={i}> {item.contenido} </p>)}
            </div>

        </div>
    );
}

export default Pestanas;