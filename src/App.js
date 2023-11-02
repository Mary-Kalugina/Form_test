import React, {useState} from 'react';
import Forms  from './Forms';
import './App.css';
import Help from './Help';

function App() {
  const [side, setSide] = useState(true)
  return (<div className='container'>
    {side ? <Forms toggle={setSide} /> : <Help toggle={setSide}/>}
        
  </div>
  );
}

export default App;
