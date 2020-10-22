import React from 'react';
import PropTypes from 'prop-types';

// Hacer uso de FORMIK que no es más que un wrapper - gestor de formularios reactivos
import { Formik } from 'formik';
// Hacer uso de YUP para validar nuestros formularios
import * as Yup from 'yup';

// Añadimos los estilos para el formulario:
import '../styles/Formik.css';

// Creamos un componente que va a servie para crear Todos
// Éste recibirá por "props" la función a ejecutar en el submit
// del formulario. Este prop se llamará submit
const ContactoForm = ({mostrarNuevoContacto, onClickMostrarNuevoContacto, onClickOcultarNuevoContacto, onSubmit}) => {

    return (
        !mostrarNuevoContacto ? <button onClick = { onClickMostrarNuevoContacto }>NUEVO CONTACTO</button>
        :
        <div>
            <h2>Formulario de contacto</h2>
            <Formik
                //******* DECLARAMOS LOS VALORES INICIALES DEL FORMAULARIO ***** */
                initialValues = {
                    { 
                        nombre: '',
                        apellidos: '',
                        telefono: '',
                        email: '',
                        empresa: '',
                        sector: ''
                    }
                }
                //******* DECLARAMOS LA FUNCIÓN QUE SE DEBE EJECUTAR EN EL ONSUBMIT DEL FORMAULARIO ***** */
                onSubmit = {
                    (values, { setSubmitting }) => {
                        // Realizaríamos la llamada a la petición HTTP para hacer el login
                        // De momento lo vamos a simular con una espera de 1 segundo
                        setTimeout(() => {
                            console.log('ENVIANDO...');
                            console.table(values); // imprimos los valores del formulario
                            onSubmit({
                                ...values
                            }); // ejecutamos la función de TodoFormContainer
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
                            nombre: Yup.string()
                                .max(10, 'El nombre debe contener como máximo 10 caracteres')
                                .required('El nombre es obligatorio'),
                            apellidos: Yup.string()
                                .max(30, 'Los apellidos deben contener como máximo 30 caracteres'),
                            email: Yup.string()
                                .email('El email no es válido')
                                .required('El campo email es obligatorio'),
                            empresa: Yup.string()
                                .max(40, 'La empresa debe contener como máximo 40 caracteres'),
                            sector: Yup.string()
                                .required('El sector es obligatorio')
                        }
                    )
                }
            >

            { props => {

                const { values, touched, errors, isSubmitting, handleChange, handleSubmit, handleBlur, resetForm } = props;

                return (
                    <div>
                        <form onSubmit = { handleSubmit }>

                            {/* NOMBRE DEL USUARIO */}
                            <label htmlFor='nombre'>Nombre</label>
                            <input 
                                name = 'nombre'
                                type = 'text'
                                placeholder = 'nombre'
                                value = { values.nombre }
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.nombre && touched.nombre && 'error'}
                            />
                            { errors.nombre && touched.nombre && (
                                <div className='input-error'>
                                    { errors.nombre }
                                </div>
                            )}

                            {/* APELLIDOS DEL USUARIO */}
                            <label htmlFor='apellidos'>Apellidos</label>
                            <input 
                                name = 'apellidos'
                                type = 'text'
                                placeholder = 'apellidos'
                                value = { values.apellidos }
                                onChange = { handleChange }
                                onBlur = { handleBlur }
                                className = { errors.apellidos && touched.apellidos && 'error'}
                            />
                            { errors.apellidos && touched.apellidos && (
                                <div className='input-error'>
                                    { errors.apellidos }
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
                           
                            <button onClick={ onClickOcultarNuevoContacto }>CERRAR</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type='submit' disabled={ isSubmitting }>CREAR</button>
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

ContactoForm.propTypes = {
    mostrarNuevoContacto: PropTypes.bool.isRequired,
    onClickMostrarNuevoContacto: PropTypes.func.isRequired,
    onClickOcultarNuevoContacto: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default ContactoForm;