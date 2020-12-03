import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout, PrivateRoute } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  TaskRegister as TaskRegisterView,
  TaskEdit as TaskEditView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <PrivateRoute
        component={HomeView}
        exact
        layout={MainLayout}
        path="/home" 
      />

      <PrivateRoute
        component={TaskRegisterView}
        exact
        layout={MainLayout}
        path="/task-add"
      />

      <PrivateRoute
        component={TaskEditView}
        exact
        layout={MainLayout}
        path="/task-edit"
      />

      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />

      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
