import React from 'react';
import Start from '../Start/Start';
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Result from '../Result/Result';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
      <>
        <Routes>
          <Route path='/React-Form-Validation' element={<Start />} />
          <Route path='/step1' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </>
  );
}

export default App;
