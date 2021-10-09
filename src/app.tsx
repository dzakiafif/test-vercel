import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ADMINROUTES, USERROUTES } from 'routes';
import {
  LoginPage,
  RegisterPage,
  HomePage,
  DashboardPage,
  AdminLoginPage,
} from 'pages';
import { AppBackend } from 'appBackend';

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

        <Route exact path={ADMINROUTES.LOGIN}>
          <AdminLoginPage />
        </Route>

        <Route exact path={ADMINROUTES.DASHBOARD}>
          <AppBackend>
            <DashboardPage />
          </AppBackend>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
