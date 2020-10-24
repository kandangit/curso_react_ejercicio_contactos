import { connect } from 'react-redux';
import { addContacto, updateVisibilidadNuevoContacto } from '../store/actions/actions';

import ContactoForm from '../components/ContactoForm';

const mapStateToProps = (state) => {
    return {
        mostrarNuevoContacto: state.contactosState.mostrarNuevoContacto
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickMostrarNuevoContacto: () => {
            dispatch(updateVisibilidadNuevoContacto(true));
        },
        onClickOcultarNuevoContacto: () => {
            dispatch(updateVisibilidadNuevoContacto(false));
        },
        onSubmit: (contacto) => {
            dispatch(addContacto(contacto));
        }
    }
}

const ContactoFormContainer = connect(mapStateToProps, mapDispatchToProps)(ContactoForm)

export default ContactoFormContainer