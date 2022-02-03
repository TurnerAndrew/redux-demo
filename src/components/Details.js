import React from 'react';
import { useSelector } from 'react-redux'

const Details = () => {

  const { name, age, location } = useSelector(store => store)

  return (
    <div className={'form-div details'}>
        <div className={'form-container'}><h1 className={'label'}>Name: </h1><h2 className={'detail-info'}>{name}</h2></div>
        <div className={'form-container'}><h1 className={'label'}>Age: </h1><h2 className={'detail-info'}>{age}</h2></div>
        <div className={'form-container'}><h1 className={'label'}>Location: </h1> <h2 className={'detail-info'}>{location}</h2></div>
    </div>
    )
};

export default Details;
