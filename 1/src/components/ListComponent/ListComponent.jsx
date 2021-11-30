import React from 'react';
import PropTypes from 'prop-types';

const ListComponent = React.memo(({ className, data, ...rest}) => {
  return (
    <ol>
      {data && data.map((item, index) => (
        <li key={index}>{item.room_type}, {item.vacant_rooms}, ${item.price}</li>
      ))}
    </ol>
  )
});

ListComponent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

export default ListComponent;
