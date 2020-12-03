import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { withFirebase } from '../../../../service/Firebase';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  logo: {
    paddingTop: theme.spacing(1)
  },
  color: {
    background: '#f4faf9'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  selfcare: {
    color: '#4cada4',
    fontFamily: 'Segoe UI'
  },
  box: {
    display: 'flex',
    alignItems: 'flex-start',
    selected: {
      alignSelf: 'center'
    }
  }
}));

const Topbar = (props) => {
  const { className, firebase, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.color}>
        <RouterLink to="/">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}>
            <Grid item xs>
              <img
                alt="Logo"
                src="/images/logos/logo1.png"
                className={classes.logo}
              />
            </Grid>

            <Grid item xs>
              <Typography variant="h2">selfcare</Typography>
            </Grid>
          </Grid>
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton
            className={classes.signOutButton}
            color="primary" //color="inherit"
            onClick={firebase.doSignOut}>
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            className={classes.signOutButton}
            color="primary"
            onClick={firebase.doSignOut}>
            <InputIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default withFirebase(Topbar);
