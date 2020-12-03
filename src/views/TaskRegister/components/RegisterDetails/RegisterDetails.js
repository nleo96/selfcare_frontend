import React, { useState, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ApiService from '../../../../service/ApiService';
import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  IconButton,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 600
  }
}));

const RegisterDetails = (props) => {
  const { className, ...rest } = props;

  let history = useHistory();

  const classes = useStyles();

  const [task, setTask] = useState({
    title: '',
    image_url: '',
    description: ''
  });

  const taskChange = (event) => {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    });
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleSubmit = useCallback(() => {
    ApiService.addTask(task).then((res) => {
      console.log(res.statusText);
      if (res !== null && res !== undefined) {
        setTask({
          title: '',
          image_url: '',
          description: ''
        });
        history.goBack();
      }
    });
  }, [history, task]);

  return (
    <div>
      <Card>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center">
          <Grid item>
            <IconButton onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <CardHeader
              subheader="Informações podem ser editadas"
              title="Inserir nova atividade"
            />
          </Grid>
        </Grid>
      </Card>

      <Card {...rest} className={clsx(classes.root, className)}>
        <form autoComplete="off" noValidate>
          <CardContent>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Título"
                  margin="normal"
                  id="title"
                  name="title"
                  onChange={taskChange}
                  required
                  value={task.title}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Link da imagem"
                  margin="normal"
                  id="image_url"
                  name="image_url"
                  onChange={taskChange}
                  required
                  value={task.image_url}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descrição"
                  margin="normal"
                  id="description"
                  name="description"
                  multiline
                  rows={4}
                  onChange={taskChange}
                  required
                  value={task.description}
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </Grid>

              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"></Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Salvar
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
};

RegisterDetails.propTypes = {
  className: PropTypes.string
};

export default RegisterDetails;
