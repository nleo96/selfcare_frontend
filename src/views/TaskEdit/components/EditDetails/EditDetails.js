import React, { useState, useEffect, useCallback } from 'react';
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
  IconButton,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600
  }
}));

const EditDetails = (props) => {
  const { className, ...rest } = props;

  let history = useHistory();

  const classes = useStyles();

  const [task, setTask] = useState({
    id: '',
    title: '',
    image_url: '',
    description: ''
  });

  useEffect(() => {
    const loadTask = () => {
      const data = JSON.parse(window.localStorage.getItem('task'));
      setTask({
        id: data.id,
        title: data.title,
        image_url: data.image_url,
        description: data.description
      });
    };
    loadTask();
  }, []);

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
    ApiService.editTask(task).then((res) => {
      history.push('/');
    });
  }, [task, history]);

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
              title="Editar atividade"
            />
          </Grid>
        </Grid>
      </Card>
      <br />

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

EditDetails.propTypes = {
  className: PropTypes.string
};

export default EditDetails;
