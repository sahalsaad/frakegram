import React from 'react';
import {Col, Glyphicon, OverlayTrigger, Popover, Row, Thumbnail} from "react-bootstrap";
import moment from "moment";

// TODO: Implement onclick handler to call api to remove the item and update the state.
const popoverClickRootClose = (
  <Popover id="popover-trigger-click-root-close" title="Delete this post?">
    Not supported yet.
  </Popover>
);

const Posts = ({posts}) => (
  <Row>
    {
      posts.map(post => (
        <Col key={post.id} xs={12} md={12}>
          <Thumbnail src={post.image.url} alt="242x200">
            <small>{moment(post.created_at).fromNow()}</small>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={popoverClickRootClose}
            >
              <Glyphicon className="pull-right remove-icon" glyph="trash" />
            </OverlayTrigger>
            <p>{post.description}</p>
          </Thumbnail>
        </Col>
      ))
    }
  </Row>
);


export default Posts;