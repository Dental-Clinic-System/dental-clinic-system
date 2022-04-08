import { Button } from '@mui/material';
import React from 'react';
import { PatientsGrid } from './pages';

const App = () => {
  return (
    <>
      <div style={{backgroundColor: 'honeydew'}}>
        <Button>Нэмэх</Button>
        <Button>Засах</Button>
        <Button>Устгах</Button>
        <PatientsGrid />
      </div>
    </>
  );
}

export default App;
