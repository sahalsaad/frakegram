import {Col, Grid, Row} from "react-bootstrap";
import React from "react";
import UploadForm from "./UploadForm";
import Posts from "./Posts";

export default class BodyContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={8} md={8}>
            <Posts />
          </Col>
          <Col sm={4} md={4}>
            <UploadForm />
          </Col>
        </Row>
      </Grid>
    );
  }
}
