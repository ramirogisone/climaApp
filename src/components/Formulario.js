import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
    
    const [error, guardarError] = useState (false);

    // extraer valores
    const {ciudad, pais} = busqueda;

    // guardo los elementos en el state
    const handleChange = ev => {
        guardarBusqueda({
            ...busqueda,
            [ev.target.name] : ev.target.value
        });

    }

    const handleSubmit = ev => {
        ev.preventDefault();
        // valido el formulario
        if(ciudad === '' || pais === ''){
            guardarError(true);
            return
        }
        guardarError(false);
        guardarConsultar(true);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error mensaje='Todos los campos son obligatorios' /> : null}

            <div className='input-field col s12'>
                <input 
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>ciudad: </label>
            </div>
            <div className='input-field col s12'>
                <select
                    name='pais'
                    id='pais'
                    value={pais}
                    onChange={handleChange}
                >
                    <option value=''>--Seleccione un país--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor='pais'>País</label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
        </form>
     );
}
 
export default Formulario;