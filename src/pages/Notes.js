import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TodoCard from '../Components/todo/TodoCard.js';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <TodoCard note={note} handleDelete={handleDelete} />
            
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}