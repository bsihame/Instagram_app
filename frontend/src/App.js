import React from 'react';
import { Route } from "react-router-dom";
import Home from "./components/pages/Home"

import './App.css';

function App() {
  return (
    <div className="App">
      <Route>
        <Home />
     </Route>
    
    </div>
  );
}

export default App;
