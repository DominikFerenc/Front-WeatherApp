import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import CustomButton from './Components/CustomButton';
import GridPanels from './Components/GridPanels';


function App() {


  return (
   <div className="Main-container">
   < div className="Menu">
<Menu/>
   </div>
   <div className="Main-website">

<GridPanels/>

   </div>

   </div>
  );
}

export default App;
