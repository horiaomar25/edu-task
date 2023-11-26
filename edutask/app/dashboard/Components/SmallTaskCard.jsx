import React from 'react';

const SmallTaskCard = ({ task }) => {
    console.log(task)
  return (
    <div style={{ border: '1px solid black', borderRadius: '8px' }}>
      <span>
        <p>{task.task_name}</p>
      </span>
    </div>
  );
};

export default SmallTaskCard;