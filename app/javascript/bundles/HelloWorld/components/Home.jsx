import React from 'react';
import Header from './Header';
import BodyContainer from "./BodyContainer";

export default ({token}) => {
  return (
    <div>
      <Header />
      <BodyContainer token={token}/>
    </div>
  )
}
