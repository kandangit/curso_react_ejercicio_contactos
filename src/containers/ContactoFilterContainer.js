import { connect } from 'react-redux';
import { updateFiltroContactos } from '../store/actions/actions';

import ContactoFilter from '../components/ContactoFilter';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (filtro) => {
            dispatch(updateFiltroContactos(filtro));
        }
    }
}

const ContactoFilterContainer = connect(mapStateToProps, mapDispatchToProps)(ContactoFilter)

export default ContactoFilterContainer