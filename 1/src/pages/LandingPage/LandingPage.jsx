import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';
import ListComponent  from '../../components/ListComponent/ListComponent';

const LandingPage = ({ className, firebase, ...rest }) => {
  const classes = useStyles();
  const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];

  return (
    <div className={classes.root}>
      <ListComponent data={rooms} />
    </div>
  );
};

LandingPage.propTypes = {
  className: PropTypes.string,
};

export default LandingPage;
