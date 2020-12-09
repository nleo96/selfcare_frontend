import React, { useCallback, useRef, useState } from 'react';
import { withFirebase } from '../../service/Firebase';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Button, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'colunm',
    justifyContent: 'center'
  },
  logo: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  form: {
    width: '400px',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  title: {
    marginBottom: theme.spacing(2)
  },

  textField: {
    marginTop: theme.spacing(2)
  },
  signInButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignIn = (props) => {
  const { firebase } = props;

  let history = useHistory();

  const classes = useStyles();

  const [user, setUser] = useState({
    email: '',
    password: '',
    error: null
  });

  const { email, password, error } = user;

  const isInvalid = password === '' || email === '';

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      firebase
        .doSignInWithEmailAndPassword(email, password)
       // .doSignInWithEmailAndPasswordPersistence(email, password)
        .then(() => {
          setUser({ ...user });
          history.push('/home');
        })
        .catch((error) => {
          setUser({ ...user, error: error });
        });
    },
    [firebase, email, password, user, history]
  );

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.grid}
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item className={classes.logo}>
          <Grid item>
            <img src="/images/logos/logo3.png" alt="" />
          </Grid>
        </Grid>

        <Grid item className={classes.title}>
          <Typography variant="h1">selfcare</Typography>
        </Grid>

        <Grid item>
          <Paper>
            <form onSubmit={onSubmit} className={classes.form} >
              <TextField
                className={classes.textField}
                fullWidth
                label="Email"
                name="email"
                onChange={onChange}
                type="text"
                value={email}  
                autoComplete="email"        
                variant="outlined"
                inputRef={emailRef}
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="Senha"
                name="password"
                onChange={onChange}
                type="password"
                value={password}
                autoComplete="current-password"
                variant="outlined"
                inputRef={passwordRef}
              />
              <Button
                className={classes.signInButton}
                disabled={isInvalid}
                color="primary"
                fullWidth
                size="large"
                type="submit"
                onClick={onSubmit}
                variant="contained">
                Entrar
              </Button>
              {error && <p>{error.message}</p>}
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withFirebase(SignIn);
