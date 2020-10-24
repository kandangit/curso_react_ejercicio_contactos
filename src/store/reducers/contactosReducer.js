import Filter from "../../components/Filter";

let initialState = { 
    listaContactos: [{
            id: 1,
            nombre: "Tomeu",
            apellidos: "Smith",
            telefono: "971223344",
            email: "tsmith@fundaciobit.org",
            empresa: "Fundación BIT",
            sector: "ALIMENTACION"
        },
        {
            id: 2,
            nombre: "Alonso",
            apellidos: "Prueba",
            telefono: "971224433",
            email: "aprueba@plexus.com",
            empresa: "PLEXUS",
            sector: "FINANZAS"
        }
    ],
    mostrarNuevoContacto: false,
    filtro: new Filter()
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
        case 'UPDATE_FILTRO_CONTACTOS':
            console.log(`[ContactosReducer] UPDATE_FILTRO_CONTACTOS. payload recibido ${action.payload}`);
            let nuevoFiltro = Filter.newObject(action.payload);
            return {
                ...state,
                filtro: nuevoFiltro
            }
        default:
            return state;
    }
} 

export default contactosReducer;