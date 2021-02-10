import './App.css';
import { useState } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import Nav from './components/Nav/Nav.jsx';
import Signup from './pages/signup/Siginup.jsx';

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const [direction, setDirection] = useState('ltr');

  return (
    <StylesProvider jss={jss}>
      <div className='App' dir={direction}>
        <Nav setDirection={setDirection} direction={direction} />
        <Signup />
      </div>
    </StylesProvider>
  );
};

export default App;
