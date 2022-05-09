import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useEffect, useState } from 'react';
import { todoContext } from '../App';

function AddTodo({ data = false }) {
  const { dispatch } = React.useContext(todoContext);

  const [addTodo, setAddTodo] = useState({
    id: data? (data.id) : "",
    title: data? (data.title) : (""),
    description: data? (data.description) : ("")
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };

  return (
      <div>
        <Button variant='contained' style={{borderRadius: 50, marginRight: "10px"}} onClick={handleOpen}>{addTodo.id? "Edit" : "Tambah"}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>{addTodo.title}</h2>
            <TextField type="text" size="small" value={addTodo.title} onChange={(e) =>{
                setAddTodo({
                  ...addTodo,
                  title: e.target.value,
                })}}/><br />
            <h2>{addTodo.description}</h2>
            <TextField type="text" size="small" value={addTodo.description} onChange={(e) =>{
                setAddTodo({
                  ...addTodo,
                  description: e.target.value,
                })}}/>
            <Button type='submit' onClick={() => {
              dispatch({ type: 'ADD_TODO', payload: addTodo });
              setAddTodo({
                id: "",
                title: "",
                description: "",
              })
            }}>{addTodo.id? "Edit" : "Tambah"}</Button><br /><br />
          </Box>
        </Modal>
          
      </div>
  );
}

export default AddTodo;
