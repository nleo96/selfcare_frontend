import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { withAuthorization } from '../../service/Session';
import { RegisterDetails } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Register = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <Grid item xs={12}>
          <RegisterDetails />
        </Grid>
      </Grid>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Register);
