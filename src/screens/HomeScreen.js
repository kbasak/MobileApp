import React, { useState } from 'react';
import FundDetails from './FundDetails';
import HomeItem from './HomeItem';

const Home = ({ route }) => {
  const [screen, setScreen] = useState(false);
  const [fund, setFund] = useState('');
  const [account, setAccount] = useState([]);
  //console.log(fund)
  if (route.params) {
    const data = route.params.login;
    console.log(data)
  }
  return (
    <>
      {!screen ? <HomeItem setAccount={setAccount} setScreen={setScreen} setFund={setFund}/> : <FundDetails setScreen={setScreen} setFund={setFund} fund={fund} account={account}/>}
    </>
  );

}

export default Home;