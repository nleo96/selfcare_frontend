import React, { useEffect } from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import { useHistory } from 'react-router-dom';

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const { firebase } = props;

    let history = useHistory();

    useEffect(() => {
      const load = async () => {
        await firebase.auth.onAuthStateChanged((authUser) => {
          if (!condition(authUser)) {
            history.push('/sign-in');
          }
        });
      };
      load();
    });

    return (
      <AuthUserContext.Consumer>
        {(authUser) => (condition(authUser) ? <Component {...props} /> : null)}
      </AuthUserContext.Consumer>
    );
  };

  return withFirebase(WithAuthorization);
};

export default withAuthorization;
