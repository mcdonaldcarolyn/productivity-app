import React, { Component,useState } from 'react';
import Card from '@mui/material/Card';
import Typography  from '@mui/material/Typography';
import { CheckboxComponent } from '../CheckboxComponent';
import { createMuliTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import  CardHeader  from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel } from '@mui/material';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == 'work') {
        return '1px solid red'
      }
    }
  }
})

export default function TodoCard({ note, handleDelete }) {
  const classes = useStyles(note)
  const [checked, setChecked] = useState([true]);
  const handleChange = (event) => {
    setChecked([event.target.checked, checked[1]])
  }
    
  const toggleCheckbox = event => {
    setChecked(event.target.checked)
  }
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)} aria-label= "delete">
              <DeleteIcon />
            </IconButton>
        }
          title={note.title}
          subheader={note.category}
        />
        
        <CardContent>
          <FormControlLabel
            label= {note.details}
            control={<Checkbox checked={checked[0]} onChange={ handleChange}/>}
          />
         
          <Typography variant="body2" color="textSecondary">
            
          </Typography>
          </CardContent>
        
      </Card>
    </div>
         
        
  );

  
};

