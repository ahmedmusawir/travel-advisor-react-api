import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import useStyles from './styles';

function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h5' className={classes.title}>
          <AcUnitIcon style={{ marginBottom: '-5px' }} /> Traveller Moose
        </Typography>
        {/* NONE OF THE FOLLOWING WORKED. HAD TO ADD A CLASS WITH DISPLAY FLEX */}
        {/* <Box display="flex"> */}
        {/* <Box component="div" display="flex"> */}
        <Box className={classes.suxBox}>
          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>

          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
