import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';



function BaseLayout() {
  const [side, setSide] = useState(false);

  return (
    <>
      <NavBar side={side} setSide={setSide}/>
      <SideBar side={side}/>
    </>
  );
}

export default BaseLayout;