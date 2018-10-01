import React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import ReactOnRails from 'react-on-rails';

const onSubmit = (event) => {
  event.preventDefault();
}

const UploadForm = ({token}) => {
  return (
    <form action='/posts' method='post' className="upload-form" encType="multipart/form-data">
      <FormGroup controlId="image">
        <ControlLabel>Upload Image</ControlLabel>
        <FormControl name="image" type="file" />
      </FormGroup>
      <input type="hidden" name="authenticity_token" value={ReactOnRails.authenticityToken()} />
      <FormGroup controlId="description">
        <ControlLabel>Description</ControlLabel>
        <FormControl name="description" componentClass="textarea" placeholder="Write your description here..." />
      </FormGroup>
      <Button bsStyle="primary" type="submit">Upload</Button>
    </form>
  );
};

export default UploadForm;
