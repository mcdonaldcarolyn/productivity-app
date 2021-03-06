import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import Container from '@mui/material/Container';
//import KeyboardArrowRightIcon from '@mui/material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles({

  field: {
    marginTop: 20,
    display: 'block'
  }
})


export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState([])
  
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')
  const [checked, setChecked] = useState([false]);
  const toggleCheckbox = event => {
    setChecked(event.target.checked)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (title === '') {
      setDetailsError(true)
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category, checked })
      }).then(() => history.push('/'))
    }
  }
  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          error={titleError}
        />
         <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <TextField className={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="moreDetails"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit" 
          color="secondary" 
          variant="contained"
          >
          Submit
        </Button>
        </form>
      </Container>
  )
}
  
    
    
    
    
    
   
   
  
   
   
  
   
  
  
   
   
   
   

   
  
   


