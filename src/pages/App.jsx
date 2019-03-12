import React from 'react';
import ComponentTestingPropsAndState from '../components/ComponentTestingPropsAndState';

const App = () => (
  <div>
    <h1>HELLO WORLD!</h1>
    <ComponentTestingPropsAndState
      required="Wow, required prop."
      notRequired="Wow, a not required one as well"
    />
    <ComponentTestingPropsAndState
      required="Definitely required"
    />
  </div>
);

export default App;
