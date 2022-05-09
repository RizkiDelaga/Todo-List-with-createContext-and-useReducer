import { Button } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { todoContext } from '../App';
import AddTodo from './AddTodo';

function TodoList() {
  const { state, dispatch } = React.useContext(todoContext);

  if (state.data) {
    return (
      <Fragment>
        
        <AddTodo />
          
        {state.data.map((item) => (
            <div>
                <hr />
                <h2>{item.id}</h2>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div style={{ display: 'flex'}}>
                  <AddTodo data={item}/>
                  <Button variant='contained' color='error' style={{borderRadius: 50, paddingRight: 10}} onClick={() => {
                    dispatch({ type: 'DELETE_TODO', payload: item.id });
                    }}>Hapus</Button>
                </div>
                <hr />
            </div>
        ))}
        
      </Fragment>
    );
  }
  return (
      <h2>No Data</h2>
  );
}

export default TodoList;
