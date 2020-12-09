import axios from 'axios';
 
const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'oauth': 'true'
  }
});

class ApiService {
  fetchTasks = async () => {
    try {
      return await api.get('/tasks');
    } catch (err) {
      return err;
    }
  };

  fetchTaskById = async (id) => {
    try {
      return await api.get('/tasks/' + id);
    } catch (err) {
      return err;
    }
  };

  addTask = async (task) => {
    try {
      return await api.post('/tasks', task);
    } catch (err) {
      return err;
    }
  };

  editTask = async (task) => {
    try {
      return await api.put('/tasks/' + task.id, task);
    } catch (err) {
      return err;
    }
  };

  deleteTask = async (id) => {
    try {
      return await api.delete('/tasks/' + id);
    } catch (err) {
      return err;
    }
  };
}

export default new ApiService();
