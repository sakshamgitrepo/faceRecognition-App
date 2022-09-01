import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className='mb3'>
      <div className='white f3'>
        {/* {`${name}, your current entry count is...`} */}
        {`Sam,Your Rank is `}
      </div>
      <div className='white f1'>
        {/* {entries} */ '# 5'}
      </div>
    </div>
  );
}

export default Rank;