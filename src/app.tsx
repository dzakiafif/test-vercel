import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { USERROUTES } from 'routes';
import {
  LoginPage,
  RegisterPage,
} from 'pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={USERROUTES.ROOT}>
          <LoginPage />
        </Route>
        <Route exact path={USERROUTES.REGISTER}>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
