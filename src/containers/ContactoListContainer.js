import { connect } from 'react-redux';

import ContactoList from '../components/ContactoList';
import { deleteContacto } from '../store/actions/actions';

const mapStateToProps = (state) => {
    return {
        contactos: state.contactosState.listaContactos
    }
}

// Despacharemos la acción de tipo toggleTodo y se la asignaremos
// a la prop llamada 'onTodoClick' del componente TodoList
const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => {
            // Despacha la acción que actualiza el store
            console.log("mapDispatchToProps dispatch action");
            dispatch(deleteContacto(id)); // LO QUE REALMENTE SE EJECUTA ES ESTO
        },
    }
}

// Conectamos los datos del State con los Props del TodoList
// También concetamos la función de despachar acciones con las props de TodoList
const ContactoListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactoList)

export default ContactoListContainer;