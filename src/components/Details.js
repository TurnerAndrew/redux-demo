import React from 'react';
import { connect } from 'react-redux'

const Details = (props) => {

  console.log(props)

  const { name, age, location } = props

  return (
    <div className={'form-div details'}>
        <div className={'form-container'}><h1 className={'label'}>Name: </h1><h2 className={'detail-info'}>{name}</h2></div>
        <div className={'form-container'}><h1 className={'label'}>Age: </h1><h2 className={'detail-info'}>{age}</h2></div>
        <div className={'form-container'}><h1 className={'label'}>Location: </h1> <h2 className={'detail-info'}>{location}</h2></div>
    </div>
    )
};

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Details);
