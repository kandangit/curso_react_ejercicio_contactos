import React from 'react';
import PropTypes from 'prop-types';
import Contacto from './Contacto';

const ContactoList = ({contactos, onDelete}) => {
    return (
        <div>
            <h1>Mi Lista de contactos</h1>
            <ul>
                {contactos.map(contacto => (
                    <Contacto 
                        key={contacto.id}
                        {...contacto}
                        onDelete = {
                            () => onDelete(contacto.id)
                        }
                    />
                ))}
            </ul>
        </div>
    );
};

/** Especificamos los tipos y estructura de los props de ContactoList */
ContactoList.propTypes = {
    contactos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                nombre: PropTypes.string.isRequired,
                apellidos: PropTypes.string,
                email: PropTypes.string.isRequired,
                empresa: PropTypes.string,
                sector: PropTypes.string.isRequired
            }
        ).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ContactoList;
