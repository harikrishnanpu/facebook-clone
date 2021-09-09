import React, { useState } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';
import useWindowDimensions from './useDimensionsHook';

function App() {
  const [{user},dispatch] = useStateValue();
  const { height, width } = useWindowDimensions();


  return (
    <div className="app">
      {!user ? ( <Login /> ) : 
      (
        <div>
          <Header />
          <div className="app__body">
            { width > "800" ? <Sidebar /> : ""}
            <Feed />
            {/* <Widgets /> */}
          </div>
        </div>
        )}
    </div>
  );
}

export default App;
