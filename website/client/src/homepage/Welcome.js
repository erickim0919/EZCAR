import React from 'react';
import '@rmwc/top-app-bar/styles';
import CarAppBar from './CarAppBar';
import CCard from '../cards/CCard';
function Welcome(props) {
 
 return (
   <>
    <CarAppBar/>
    <div>
      <CCard/>
      <CCard/>
      <CCard/>
    </div>
  </>
  );
}
export default Welcome;
