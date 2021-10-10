import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ADMINROUTES, USERROUTES } from 'routes';
import {
  LoginPage,
  RegisterPage,
  HomePage,
  DashboardPage,
  AdminLoginPage,
  CreateUserPage,
  ListUserPage,
  UpdateUserPage,
  CreateProductPage,
  ListProductPage,
  UpdateProductPage,
  CreateCategoryPage,
  ListCategoryPage,
  UpdateCategoryPage,
  CreateProductInventoriesPage,
  ListProductInventoriesPage,
  UpdateProductInventoriesPage,
  CreateProductImagesPage,
  ListProductImagesPage,
  UpdateProductImagesPage,
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

        <Route exact path={ADMINROUTES.USER_LIST}>
          <AppBackend>
            <ListUserPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.USER_UPDATE}>
          <AppBackend>
            <UpdateUserPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_CREATE}>
          <AppBackend>
            <CreateProductPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_LIST}>
          <AppBackend>
            <ListProductPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_UPDATE}>
          <AppBackend>
            <UpdateProductPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.CATEGORY_CREATE}>
          <AppBackend>
            <CreateCategoryPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.CATEGORY_LIST}>
          <AppBackend>
            <ListCategoryPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.CATEGORY_UPDATE}>
          <AppBackend>
            <UpdateCategoryPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_INVENTORIES_CREATE}>
          <AppBackend>
            <CreateProductInventoriesPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_INVENTORIES_LIST}>
          <AppBackend>
            <ListProductInventoriesPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_INVENTORIES_UPDATE}>
          <AppBackend>
            <UpdateProductInventoriesPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_IMAGES_CREATE}>
          <AppBackend>
            <CreateProductImagesPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_IMAGES_LIST}>
          <AppBackend>
            <ListProductImagesPage />
          </AppBackend>
        </Route>

        <Route exact path={ADMINROUTES.PRODUCT_IMAGES_UPDATE}>
          <AppBackend>
            <UpdateProductImagesPage />
          </AppBackend>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
