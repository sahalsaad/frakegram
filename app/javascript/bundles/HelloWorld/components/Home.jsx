import React from 'react';
import AppBar from './AppBar';
import UploadForm from "./UploadForm";

export default ({email}) => {
  return (
    <div>
      <AppBar />
      <UploadForm/>
    </div>
  )
}
