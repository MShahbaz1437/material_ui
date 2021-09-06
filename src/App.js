import { Container, Box, Typography, makeStyles, Fab, Grid, Card, CardActions, CardMedia, CardContent, CardActionArea, } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { useState, useEffect } from 'react';



const useStyles = makeStyles((theme) => ({
  root:{
    paddingTop:theme.spacing(2),
  },
  myBox: {
    background: blue[300],
  },
  color: {
    color: theme.palette.grey[50],
    fontSize: '2rem',
    textAlign: 'center',
  },
  Iconcreate: {
    position: 'fixed',
    bottom:'5%',
    right:'5%',
    zIndex:theme.zIndex.tooltip,
  }
}))


function App() {
  const classes = useStyles();

  const [users, setUpdate] = useState([]);

  const loadUser = async () => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUpdate(result.data);
  };

  useEffect(() => {
    loadUser();
  }, [])
  return (
    <Container maxWidth='100vw' className={classes.container}>
      <Box p={2} textAlign='justify' className={classes.myBox}>
        <Typography className={classes.color}>Gym Freak</Typography>
      </Box>



      <Fab color='secondary' variant='extended' className={classes.Iconcreate}>
        <AddIcon />Create
      </Fab> 
      <Grid container spacing={4} className={classes.root} justifyContent='center'>
        {
          users.map((user) => (

            <Grid item sm={6} lg={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component='img' image='https://source.unsplash.com/300x200/?car,tesla,safari'/>
                  <CardContent>
                  <Typography variant='h6'>{user.name}</Typography>
                  <Typography>{user.email}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

          ))
        }

      </Grid>

    </Container>
  );
}

export default App;
