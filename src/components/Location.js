import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addLocation } from '../redux/reducer'

const Location = (props) => {

  const [location, setLocation] = useState()

  const addLocation = () => {
    props.addLocation(location)
  }

  return (
    <div className={'form-div'}>
        <h1 className={'label'}>Enter your location:</h1>
        <input type='text' className='input'></input>
        <button className={'save'}>Save</button>
    </div>
    )
};

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

export default connect( mapStateToProps, {addLocation})(Location)
