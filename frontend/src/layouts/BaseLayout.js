import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';



function BaseLayout() {

  return (
    <>
      <NavBar/>
      <SideBar/>
    </>
  );
}

export default BaseLayout;