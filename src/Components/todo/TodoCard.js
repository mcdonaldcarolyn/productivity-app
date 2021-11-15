import React, { Component } from 'react';
import Card from '@mui/material/Card';
import { Typography, Container, CardContent, Checkbox, TextField, CardHeader, IconButton } from '@mui/material';
//import { CheckboxComponent } from '../CheckboxComponent';
//import { createMuliTheme } from '@mui/material';
//import { makeStyles } from '@mui/styles';
//import Grid from '@mui/material/Grid';
//import Paper from '@mui/material/Paper';

export default function TodoCard({ note, handleDelete }) {
  
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              
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

