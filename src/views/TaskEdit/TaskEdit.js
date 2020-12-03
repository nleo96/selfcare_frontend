import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { withAuthorization } from '../../service/Session';
import { EditDetails } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Edit = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <Grid item xs={12}>
          <EditDetails />
        </Grid>
      </Grid>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Edit);
