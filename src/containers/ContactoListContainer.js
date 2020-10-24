import { connect } from 'react-redux';

import ContactoList from '../components/ContactoList';
import { deleteContacto } from '../store/actions/actions';

const mapStateToProps = (state) => {
    return {
        contactos: state.contactosState.listaContactos.filter(contacto => state.contactosState.filtro.matchesContact(contacto))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => {
            // Despacha la acción que actualiza el store
            console.log("mapDispatchToProps dispatch action");
            dispatch(deleteContacto(id)); // LO QUE REALMENTE SE EJECUTA ES ESTO
        },
    }
}

// Conectamos los datos del State con los Props del ContactoList
// También conectamos la función de despachar acciones con las props de ContactoList
const ContactoListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactoList)

export default ContactoListContainer;