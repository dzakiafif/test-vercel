import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ADMINROUTES, USERROUTES } from 'routes';
import {
  LoginPage,
  RegisterPage,
  HomePage,
  DashboardPage,
  AdminLoginPage,
  CreateUserPage,
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
        <Route exact path={ADMINROUTES.USER_CREATE}>
          <AppBackend>
            <CreateUserPage />
          </AppBackend>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
