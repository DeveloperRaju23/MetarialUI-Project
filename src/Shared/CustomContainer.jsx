import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((Container) => ({
  customContainer: {
    maxWidth:'1680px',
    margin:'auto',
    width:'full'
  },
}));

function CustomContainer({ children }) {
  const classes = useStyles();

  return (
    <Container className={classes.customContainer}>
      {children}
    </Container>
  );
}

export default CustomContainer;
