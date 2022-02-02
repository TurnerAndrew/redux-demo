import React, {useState} from 'react';
import { connect } from 'react-redux'
import { addName } from '../redux/reducer';

const Name = () => {  

  return (
      <div className={'form-div'}>
          <h1 className={'label'}>Enter your name:</h1>
          <input type='text' className={'input'}></input>
          <button className={'save'}>Save</button>
      </div>
    )
};

export default Name;
