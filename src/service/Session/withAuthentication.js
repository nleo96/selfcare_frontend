import React, { useState, useEffect } from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState(null);

    const { firebase } = props;

    useEffect(() => {
      const load = async () => {
        const current =
          JSON.parse(window.localStorage.getItem('authUser')) || null;
        await firebase.auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            setAuthUser(authUser);
            window.localStorage.setItem('authUser', JSON.stringify(authUser));
          } else if (current === !null) {
            setAuthUser(current);
          } else {
            setAuthUser(null);
            window.localStorage.removeItem('authUser');
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
