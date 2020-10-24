import React from 'react';
import './App.css';
import ContactoFilterContainer from './containers/ContactoFilterContainer';
import ContactoListContainer from './containers/ContactoListContainer';
import ContactoFormContainer from './containers/ContactoFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactoFilterContainer />
        <br />
        <ContactoFormContainer />
        <ContactoListContainer />
      </header>
    </div>
  );
}

export default App;
