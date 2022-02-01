import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addName } from '../redux/reducer';

const Name = (props) => { 

  const [name, setName] = useState('')

  const addName = () => {
    props.addName(name)
  }

  return (
    <div>
        <h1>Enter your name:<input type='text' onChange={e => {setName(e.target.value)}}></input></h1>
        <button onClick={addName}>Save</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

export default connect(mapStateToProps, { addName })(Name)
