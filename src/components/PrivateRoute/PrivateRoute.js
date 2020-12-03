import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthUserContext, withAuthorization } from '../../service/Session';

const PrivateRoute = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <AuthUserContext.Consumer>
          {(authUser) =>
            authUser ? (
              <Layout>
                <Component {...matchProps} />
              </Layout>
            ) : (
              <Layout>
                <Redirect to="/sign-in" />
              </Layout>
            )
          }
        </AuthUserContext.Consumer>
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
 // path: PropTypes.string
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(PrivateRoute);
