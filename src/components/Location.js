import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addLocation } from '../redux/reducer'

const Location = (props) => {

  const [location, setLocation] = useState()

  const addLocation = () => {
    props.addLocation(location)
  }

  return (
    <div>
        <h1>Enter your location:<input type='text' onChange={(e => setLocation(e.target.value))}></input></h1>
        <button onClick={addLocation}>Save</button>
    </div>
    )
};

const mapStateToProps = (state) => {
  return {
    location: state.location
  }
}

export default connect( mapStateToProps, {addLocation})(Location)
