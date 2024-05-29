import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>

            </Toolbar>
        </AppBar>
    )
}

export default Header