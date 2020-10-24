import React, { useRef } from 'react'
import PropTypes from 'prop-types';

const Contacto = ({onDelete, id, nombre, apellidos, telefono, email, empresa, sector}) => {
    // Valor de Referencia con la vista
    const miRef = useRef();
    const miDetalleRef = useRef();

    let getBackgroundColor = () => {
        switch(sector) {
            case 'FINANZAS':
                return 'blue';
            case 'IT':
                return 'yellow';
            case 'ALIMENTACION':
                return 'green';
            default: return "white";
        }
    };

    // Eventos
    
    let onClick = (event) => {
        event.preventDefault();
        miDetalleRef.current.style.display = (miDetalleRef.current.style.display === 'block' ? 'none' : 'block');
    }
    let onDeleteContacto = (event) => {
        console.log("[Contacto] onDeleteContacto called(" + event + ")");
        event.preventDefault();
        if (window.confirm(`¿Seguro que deseas eliminar el contacto con email ${email}`)) {
            onDelete();
        }
    }
    let updateMouseEventStyles = (isMouseInside) => {
        miRef.current.style.backgroundColor = (isMouseInside ? 'light' : '')  + getBackgroundColor();
        miRef.current.style.fontWeight = isMouseInside ? "bolder" : "";
        miRef.current.style.cursor = isMouseInside ? "pointer" : "";
    };

    return (
        <div>
            <li ref={miRef}
                onClick = { onClick }
                onMouseEnter={ () => { updateMouseEventStyles(true)} }
                onMouseLeave={ () => { updateMouseEventStyles(false)} }
                style = {
                    {
                        backgroundColor: getBackgroundColor(),
                        color: 'black',
                    }
                }
            >
                {nombre} - {email}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick = { onDeleteContacto }>X</span>
            </li>
            <div ref={miDetalleRef} style={{ display : 'none' , textAlign: 'left'}}>
                id: {id}<br />
                nombre: {nombre}, apellidos: {apellidos}<br />
                telefono: {telefono}, email: {email}<br />
                empresa: {empresa}, sector: {sector}
            </div>
        </div>
    );
};

/** Especificamos los tipos y estructura de los props de Contacto */
Contacto.propTypes = {
    onDelete: PropTypes.func.isRequired
};

export default Contacto;
