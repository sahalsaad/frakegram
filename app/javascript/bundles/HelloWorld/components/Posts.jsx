import React from 'react';
import {Col, Row, Thumbnail} from "react-bootstrap";

const Posts = ({posts}) => (
  <Row>
    {
      posts.map(post => (
        <Col key={post.id} xs={6} md={6}>
          <Thumbnail src={post.image.url} alt="242x200">
            <p>{post.description}</p>
          </Thumbnail>
        </Col>
      ))
    }
  </Row>
);


export default Posts;