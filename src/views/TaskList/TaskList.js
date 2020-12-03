import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import apiService from './../../service/ApiService';
import TaskCard from '../TaskCard';
import clsx from 'clsx';
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
  }
}));

const TaskList = () => {
  let rows = [];

  const classes = useStyles();

  let history = useHistory();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = () => {
      apiService.fetchTasks().then((res) => {
        if(res !== null && res !== undefined){
          setTasks(res.data);  
        } 
      });
    };
    getTasks();
  }, []);

  const editTask = (task) => {
    window.localStorage.setItem('task', JSON.stringify(task));
    history.push('/task-edit');
  };

  const deleteTask = useCallback(
    (taskId) =>
      apiService.deleteTask(taskId).then((res) => {
        if (res !== null && res !== undefined) {
          setTasks(tasks.filter((task) => task.id !== taskId));
        }
      }),
    [tasks]
  );

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center">     
        <Grid item xs={12}>
          { tasks ?             
          Object.entries(tasks).forEach(([key, value]) => {
              rows.push(
                <Grid className={clsx(classes.delimiter)} key={key}>
                  <TaskCard
                    className={clsx(classes.card)}
                    alt=""
                    id={value.id}
                    image={value.image_url}
                    title={value.title}
                    description={value.description}
                    editButton={() => editTask(value)}
                    deleteButton={() => deleteTask(value.id)}
                  />
                </Grid>           
              );            
          }) : <></>} 
          {rows} 
        </Grid>
        <div className={classes.bottonTasksList}></div>
      </Grid> 
    </div>
  );
};

export default TaskList;
