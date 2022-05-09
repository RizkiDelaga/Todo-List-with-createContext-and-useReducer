import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodoListReducer, initialState } from './reducers/TodoListReducer';

export const todoContext = createContext();

function App() {

  const [state, dispatch] = useReducer(TodoListReducer, initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const res = await axios.get(
        'https://6266738863e0f382568253d1.mockapi.io/api/custom-todo'
      );
      dispatch({ type: 'FETCH_DONE', payload: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: 'LOADING' });
    }
  };

  return (
    <todoContext.Provider value={{state, dispatch}}>
      <>
        <center><h1>ToDo List Custom</h1></center>
        <br /><br />
        {state.isLoading ? "Loading..." : <TodoList />}
      </>
    </todoContext.Provider>
  );
}

export default App;
