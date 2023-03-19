import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import './styles.css';
import './components/Form/styles.css';
import './components/Posts/styles.css';
import './components/Posts/Post/styles.css';
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (

        <Container maxWidth="lg">
            <AppBar className='appBar'  position='static' color='inherit'>
                <div>
                <Typography className='heading' variant='h2' align='center'>Memories</Typography>
                <img className='image' src={memories} alt='Memories' height='60'/>
                </div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
} 

export default App;