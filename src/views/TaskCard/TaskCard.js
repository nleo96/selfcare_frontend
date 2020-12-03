import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CardActions, Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { ImageStyled, CardStyled, TypographyStyled } from './styles';

const TaskCard = (props) => {
  const {
    className,
    image,
    title,
    description,
    editButton,
    deleteButton
  } = props;

  return (
    <CardStyled className={clsx(className)} variant="outlined">
      <ImageStyled>
        <img src={image} alt="" />
      </ImageStyled>

      <TypographyStyled>
        <Typography gutterBottom variant="h3" component="h2">
          {title}
        </Typography>
        <p>{description}</p>

        <CardActions>
          <IconButton aria-label="edit" onClick={editButton}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" onClick={deleteButton}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </TypographyStyled>
    </CardStyled>
  );
};

TaskCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default TaskCard;
