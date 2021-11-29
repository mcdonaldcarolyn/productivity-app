import React, { Component } from 'react';
import Card from '@mui/material/Card';
import Typography  from '@mui/material/Typography';
import { CheckboxComponent } from '../CheckboxComponent';
import { createMuliTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import  CardHeader  from '@mui/material/CardHeader';
import  IconButton  from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';

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
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              delete
            </IconButton>
        }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
          </CardContent>
        
      </Card>
    </div>
         
        
  );

  
};

