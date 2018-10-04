import React from 'react';
import {Button, Col, Glyphicon, OverlayTrigger, Popover, Row, Thumbnail} from "react-bootstrap";
import moment from "moment";
import {inject, observer} from "mobx-react";

@inject("store")
@observer
class Posts extends React.Component{
  constructor() {
    super();
  }
  popoverClickRootClose = (postId) => {
    const {removePost} = this.props.store
    return (
      <Popover id="popover-trigger-click-root-close" title="Delete this post?">
        <Button onClick={() => removePost(postId)} bsStyle="primary" bsSize="small">Confirm</Button>
        <Button  bsStyle="link" onClick={() => {document.body.click()}} bsSize="small">Cancel</Button>
      </Popover>
    )
  }

  render() {
    return (
      <Row>
        {
          this.props.store.posts.map(({id, image: {url}, created_at, description}) => (
            <Col key={id} xs={12} md={12}>
              <Thumbnail src={url} alt="242x200">
                <small>{moment(created_at).fromNow()}</small>
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={this.popoverClickRootClose(id)}
                >
                  <Glyphicon className="pull-right remove-icon" glyph="trash" />
                </OverlayTrigger>
                <p>{description}</p>
              </Thumbnail>
            </Col>
          ))
        }
      </Row>
    );
  }
}


export default Posts;