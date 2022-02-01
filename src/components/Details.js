import React from 'react';
import { useSelector } from 'react-redux'

const Details = (props) => {

    const name = useSelector(store => store.name)

  return (
    <div>
        <h1>{name}</h1>
    </div>
    )
};

export default Details;
