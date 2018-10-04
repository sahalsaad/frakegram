import React from 'react';
import Header from './components/Header';
import BodyContainer from "./components/BodyContainer";
import PostsStore from "./store/PostsStore";
import {Provider} from "mobx-react";

export default class Home extends React.Component {
  render() {
    const store = new PostsStore(this.props.posts)
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BodyContainer store={store} />
        </div>
      </Provider>
    )
  }
}
