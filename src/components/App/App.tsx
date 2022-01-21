import React from 'react';
import Start from '../Start/Start';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../store';

function App() {
  // const dispatch = useDispatch();
  // const { getBooksArr } = bindActionCreators(actionCreators, dispatch);
  // const popupValue = useSelector((state: State) => state.popup);
  // console.log(popupValue, '0101')
  
  return (
      <>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/step1' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
          <Route path='/step3' element={<Step3 />} />
        </Routes>
      </>
  );
}

export default App;
