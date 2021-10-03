import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { USERROUTES } from 'routes';
import {
  LoginPage,
  RegisterPage,
  HomePage
} from 'pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={USERROUTES.ROOT}>
          <HomePage />
        </Route>
        <Route exact path={USERROUTES.REGISTER}>
          <RegisterPage />
        </Route>
        <Route exact path={USERROUTES.LOGIN}>
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
