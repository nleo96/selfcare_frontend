import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '#c8e6e3',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%'
  }
}));

const Footer = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{' '}
        {/* <Link component="a" href="http://localhost:3000/" target="_blank"> */}
        <Link component="a" href="/" target="_blank">
          selfcare
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">Todos os direitos reservados</Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
