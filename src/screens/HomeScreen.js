import React, { useState } from 'react';
import FundDetails from './FundDetails';
import HomeItem from './HomeItem';

const Home = () => {
  const [screen, setScreen] = useState(false);
  const [fund, setFund] = useState([]);
  //console.log(fund)
  return (
    <>
      {!screen ? <HomeItem setScreen={setScreen} setFund={setFund}/> : <FundDetails setScreen={setScreen} setFund={setFund} fund={fund}/>}
    </>
  );

}

export default Home;