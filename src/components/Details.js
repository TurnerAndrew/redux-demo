import React from 'react';
import { useSelector } from 'react-redux'

const Details = () => {
  return (
    <div className={'form-div'}>
        <h1 className={'label'}>Name: </h1><h2 className={'detail-info'}></h2>
        <h1 className={'label'}>Age: </h1><h2 className={'detail-info'}></h2>
        <h1 className={'label'}>Location:</h1> <h2 className={'detail-info'}></h2>
    </div>
    )
};

export default Details;
