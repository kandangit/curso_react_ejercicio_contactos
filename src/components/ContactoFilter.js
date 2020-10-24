import React from 'react';
import PropTypes from 'prop-types';

// Hacer uso de FORMIK que no es más que un wrapper - gestor de formularios reactivos
import { Formik } from 'formik';
// Hacer uso de YUP para validar nuestros formularios
import * as Yup from 'yup';

// Añadimos los estilos para el formulario:
import '../styles/Formik.css';

const ContactoFilter = ({onSubmit}) => {

    return (
        <div>
            <h3>Filtro de contactos</h3>
            <Formik
                //******* DECLARAMOS LOS VALORES INICIALES DEL FORMULARIO ***** */
                initialValues = {
                    { 
                        nombreCompleto: '',
                        email: '',
                        telefono: '',
                        empresa: '',
                        sector: ''
                    }
                }
                //******* DECLARAMOS LA FUNCIÓN QUE SE DEBE EJECUTAR EN EL ONSUBMIT DEL FORMULARIO ***** */
                onSubmit = {
                    (values, { setSubmitting }) => {
                        // Realizaríamos la llamada a la petición HTTP para hacer la búsqueda
                        // De momento lo vamos a simular con una espera de 1 segundo
                        setTimeout(() => {
                            console.log('ENVIANDO...');
                            console.table(values); // imprimos los valores del formulario
                            onSubmit({
                                ...values
                            }); // ejecutamos la función de ContactoFilterContainer
                            setSubmitting(false);
                        }, 0);
                    }
                }
                // ****** VALIDACIÓN DE CAMPOS A TRAVÉS DE YUP ********
                // Creamos un esquema del aspecto que tendrá el objeto formulario y sus campos
                // además de las validaciones que se requieran
                validationSchema = {
                    Yup.object().shape(
                        {
                            nombreCompleto: Yup.string()
                                .max(50, 'El nombre debe contener como máximo 10 caracteres'),
                            email: Yup.string(),
                            empresa: Yup.string()
                                .max(40, 'La empresa debe contener como máximo 40 caracteres'),
                            sector: Yup.string()
                        }
                    )
                }
            >

            { props => {

                const { values, touched, errors, isSubmitting, handleChange, handleSubmit, handleBlur, resetForm } = props;

                return (
                    <div className="filtro">
                        <form onSubmit = { handleSubmit }>

                            {/* NOMBRE COMPLETO */}
                            <label htmlFor='nombreCompleto'>Nombre y apellidos</label>
                            <input 
                                name = 'nombreCompleto'
                                type = 'text'
                                placeholder = 'nombre y apellidos'
                                value = { values.nombreCompleto }
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.nombreCompleto && touched.nombreCompleto && 'error'}
                            />
                            { errors.nombreCompleto && touched.nombreCompleto && (
                                <div className='input-error'>
                                    { errors.nombreCompleto }
                                </div>
                            )}

                            {/* EMAIL DEL USUARIO */}
                            <label htmlFor='email'>Email</label>
                            <input 
                                name = 'email'
                                type = 'text'
                                placeholder = 'Email de usuario'
                                value = { values.email }
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.email && touched.email && 'error'}
                            />
                            { errors.email && touched.email && (
                                <div className='input-error'>
                                    { errors.email }
                                </div>
                            )}

                            {/* TELEFONO DEL USUARIO */}
                            <label htmlFor='telefono'>Teléfono</label>
                            <input 
                                name = 'telefono'
                                type = 'text'
                                placeholder = 'telefono'
                                value = { values.telefono }
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.telefono && touched.telefono && 'error'}
                            />
                            { errors.telefono && touched.telefono && (
                                <div className='input-error'>
                                    { errors.telefono }
                                </div>
                            )}

                            {/* EMPRESA DEL USUARIO */}
                            <label htmlFor='empresa'>Empresa</label>
                            <input 
                                name = 'empresa'
                                type = 'text'
                                placeholder = 'Empresa'
                                value = { values.empresa }
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.empresa && touched.empresa && 'error'}
                            />
                            { errors.empresa && touched.empresa && (
                                <div className='input-error'>
                                    { errors.empresa }
                                </div>
                            )}

                            {/* SECTOR */}
                            <label htmlFor='sector'>Sector</label>
                            <select
                                name = 'sector'
                                value = {values.sector}
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.sector && touched.sector && 'error'}
                            >
                                <option value=''>--</option>
                                <option value='FINANZAS'>Finanzas</option>
                                <option value='IT'>Tecnológico</option>
                                <option value='ALIMENTACION'>Alimentación</option>
                            </select>
                            { errors.sector && touched.sector && (
                                <div className='input-error'>
                                    { errors.sector }
                                </div>
                            )}

                            <br />
                           
                            <button type='submit' disabled={ isSubmitting }>BUSCAR</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={ resetForm }>RESET</button>
                        </form>
                    </div>
                )
                }
            }
            </Formik>
        </div>
    );
};

/** Especificamos los tipos y estructura de los props de ContactoFilter */
ContactoFilter.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default ContactoFilter;