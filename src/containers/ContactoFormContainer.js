import { connect } from 'react-redux';
import { addContacto, updateVisibilidadNuevoContacto } from '../store/actions/actions';

// Importamos el formulario de Todos
import ContactoForm from '../components/ContactoForm';

const mapStateToProps = (state) => {
    return {
        mostrarNuevoContacto: state.contactosState.mostrarNuevoContacto
    }
}

// Despacharemos la acción de tipo addTodo y se la asignaremos
// a la prop llamada 'submit' del componente TodoList
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
