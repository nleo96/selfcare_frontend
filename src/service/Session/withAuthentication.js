import React, { useState, useEffect } from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState(null);

    const { firebase } = props;

    useEffect(() => {
      const load = async () => {
        await firebase.authentication.onAuthStateChanged((authUser) => {
          if (authUser) {
            setAuthUser(authUser);
          }
        });
      };
      load();
    });

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
