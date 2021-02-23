import './App.css';
import { useState, useEffect } from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Material ui
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Router
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// Components
import Nav from './components/Nav/Nav.jsx';

// Pages
import Signup from './pages/signup/Signup.jsx';
import Signin from './pages/signin/Signin.jsx';
import Dashboard from './pages/Dashbord/Dashbord.jsx';

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const [direction, setDirection] = useState('ltr');

  useEffect(() => {
    const getLang = () => {
      const directionLang = localStorage.getItem('dirLang');
      setDirection(directionLang);
    };
    getLang();
  }, []);

  return (
    <StylesProvider jss={jss}>
      <Provider store={store}>
        <div className='App' dir={direction}>
          <Router>
            <Nav setDirection={setDirection} direction={direction} />
            <Switch>
              <Route path='/signup' exact component={Signup} />
              <Route path='/signin' exact component={Signin} />
              <Route path='/dashbord' exact component={Dashboard} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </StylesProvider>
  );
};

export default App;
