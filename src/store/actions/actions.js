// Id Incremental para identificar los contactos
let nextContactoId = 3;

// Función para devolver una Acción de tipo ADD_CONTACTO
export const addContacto = (contacto) => {
    console.log("[ACTION] addContacto(" + JSON.stringify(contacto) + ")");
    return {
        type: 'ADD_CONTACTO',
        payload: {
            id: nextContactoId++,
            ...contacto
        }
    }
}

// Función para devolver una Acción de tipo DELETE_CONTACTO
export const deleteContacto = (id) => {
    console.log("[ACTION] deleteContacto(" + id + ")");
    return {
        type: 'DELETE_CONTACTO',
        payload: id
    }
}

// Función para devolver una Acción de tipo UPDATE_VISIBILIDAD_NUEVO_CONTACTO
export const updateVisibilidadNuevoContacto = (visibility) => {
    console.log("[ACTION] actualizarVisibilidadNuevoContacto(" + visibility + ")");
    return {
        type: 'UPDATE_VISIBILIDAD_NUEVO_CONTACTO',
        payload: visibility
    } 
}
