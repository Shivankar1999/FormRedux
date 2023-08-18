import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import rootReducer from './Redux/reducer';
import FormComponent from './FormComponent';

const store = legacy_createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <FormComponent />
      </div>
    </Provider>
  );
}

export default App;
