import React from 'react';
import Header from './components/Header';
import BodyContainer from "./components/BodyContainer";

export default ({token, posts}) => {
  return (
    <div>
      <Header />
      <BodyContainer token={token} posts={posts}/>
    </div>
  )
}
