import React, { useState } from 'react';
import EmergencyFund from './EmergencyFund';
import HomeItem from './HomeItem';

const Home = () => {
  const [screen, setScreen] = useState(false);
  return (
    <>
      {!screen ? <HomeItem setScreen={setScreen}/> : <EmergencyFund setScreen={setScreen}/>}
    </>
  );

}

export default Home;