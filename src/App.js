import './App.css';
import { useState, useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Signup from './pages/signup/Signup.jsx';
import Signin from './pages/signin/Signin.jsx';
import ResponsiveDrawer from './pages/Dashbord/Dashbord.jsx';

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const getLang = () => {
      const directionLang = localStorage.getItem('dirLang');
      setDirection(directionLang);
      console.log(directionLang);
    };
    getLang();
  }, []);

  return (
    <StylesProvider jss={jss}>
      <div className='App' dir={direction}>
        <BrowserRouter>
          <Nav setDirection={setDirection} direction={direction} />
          <Switch>
            <Route path='/signup' exact component={Signup} />
            <Route path='/signin' exact component={Signin} />
            <Route path='/dashbord' exact component={ResponsiveDrawer} />
          </Switch>
        </BrowserRouter>
      </div>
    </StylesProvider>
  );
};

export default App;
