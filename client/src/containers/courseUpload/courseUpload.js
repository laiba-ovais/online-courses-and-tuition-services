import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FileUpload from './fileUpload';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  back:{
      backgroundColor: 'transparent'
  }
}));

export default function CourseUpload() {
  const classes = useStyles();
  

  return (
    <Container className={classes.back} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
       
        <Typography component="h1" variant="h5">
          ADD PRODUCT
        </Typography>
        <FileUpload></FileUpload>
        <form className={classes.form} method="post" action ="/submit" >
             <Grid container spacing={2}> 
            <Grid item xs={12} sm={6}>
              <TextField
                
                name="Product Name"
                variant="outlined"
                required
                fullWidth
                id="Product Name"
                label="Product Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Price"
                label="Price"
                name="Price"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="company_name"
                label="Company Name"
                name="company_name"
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="info"
                label="Product Info"
                id="info"
                />
             </Grid>
            
          
          <button
            type="submit"
            fullWidth
            variant="contained"
           
            className="btn btn-success btn-block"
          >
             Upload
          </button>
          
          </Grid>
          </form>
          </div>
          </Container>
      );
      }
      
 