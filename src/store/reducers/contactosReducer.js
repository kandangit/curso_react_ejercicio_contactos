let initialState = { 
    listaContactos: [{
            id: 1,
            nombre: "Tomeu",
            apellidos: "Smith",
            telefono: "971 223344",
            email: "tsmith@fundaciobit.org",
            empresa: "Fundación BIT",
            sector: "ALIMENTACION"
        },
        {
            id: 2,
            nombre: "Andrés",
            apellidos: "García",
            telefono: "971 223344",
            email: "alopez@fundaciobit.org",
            empresa: "PLEXUS",
            sector: "FINANZAS"
        }
    ],
    mostrarNuevoContacto: false
};

const contactosReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CONTACTO':
            console.log(`[ContactosReducer] ADD_CONTACTO. payload recibido ${JSON.stringify(action.payload)}`);
            let listaContactosAdd = state.listaContactos.splice(0);
            listaContactosAdd.push(action.payload);
            console.log(`[ContactosReducer] ADD_CONTACTO. nuevos contactos ${listaContactosAdd.length}`);
            return {
                ...state,
                listaContactos: listaContactosAdd,
                mostrarNuevoContacto: false
            }
        case 'DELETE_CONTACTO':
            console.log(`[ContactosReducer] DELETE_CONTACTO. payload recibido ${action.payload}`);
            let listaContactosDelete = state.listaContactos.filter(contacto => contacto.id !== action.payload);
            return {
                ...state,
                listaContactos: listaContactosDelete
            }
        case 'UPDATE_VISIBILIDAD_NUEVO_CONTACTO':
            console.log(`[ContactosReducer] UPDATE_VISIBILIDAD_NUEVO_CONTACTO. payload recibido ${action.payload}`);
            return {
                ...state,
                mostrarNuevoContacto: action.payload
            }
        default:
            return state;
    }
} 

export default contactosReducer;