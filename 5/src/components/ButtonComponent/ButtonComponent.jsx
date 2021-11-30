import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Button, CircularProgress } from '@mui/material';

import { useStyles } from './styles';

const ButtonComponent = ({ className, buttonText, children, isProgressButton, progressColor, ...rest}) => {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.primaryButtonContainer, className)} {...rest}>
      {isProgressButton 
      ? <CircularProgress className={classes.circleProgressContainer} style={{ color: progressColor ? progressColor : '#000' }}/>
      : buttonText !== undefined ? buttonText : children}
    </Button>
  )
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,
  isProgressButton: PropTypes.bool,
  progressColor: PropTypes.string,
};

export default ButtonComponent;
