import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { withAuthorization } from '../../service/Session';
import TaskList from '../TaskList/TaskList';
import { useHistory } from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1)
  },
  delimiter: {
    padding: theme.spacing(1)
  },
  card: {
    width: 600
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  },
  spacer: {
    flexGrow: 1
  },
  bottonTasksList: {
    height: '100px'
  },
  addButton: {
    marginTop: theme.spacing(-2)
  }
}));

const Home = () => {
  let history = useHistory();

  const classes = useStyles();

  const addTask = useCallback(() => {
    history.push('/task-add');
  }, [history]);

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          className={classes.addButton}
          color="primary"
          onClick={addTask}
          variant="contained">
          adicionar atividade
        </Button>
      </div>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">
        <Grid item xs={12}> 
          <TaskList /> 
        </Grid>
        <div className={classes.bottonTasksList}></div>
      </Grid>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Home);
