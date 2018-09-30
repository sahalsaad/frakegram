import {Col, Grid, Row} from "react-bootstrap";
import React from "react";
import UploadForm from "./UploadForm";
import Posts from "./Posts";

const BodyContainer = ({token, posts}) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={4} md={4}>
        <UploadForm token={token} />
      </Col>
      <Col sm={8} md={8}>
        <Posts posts={posts} />
      </Col>
    </Row>
  </Grid>
);

export default BodyContainer;
