import React from 'react';
import Header from './Header';
import BodyContainer from "./BodyContainer";
import '../style/main.css'

export default ({token, posts}) => {
  return (
    <div>
      <Header />
      <BodyContainer token={token} posts={posts}/>
    </div>
  )
}
