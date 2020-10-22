// Función para crear el Store de la apliocación
import { createStore } from 'redux';
// Importamos ComposeWithDevTools para poder analizar el store de la app en Chrome/Firefox
import { composeWithDevTools } from 'redux-devtools-extension';

// Importamos el Root Reducer para dárselo al store de la aplicación
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;