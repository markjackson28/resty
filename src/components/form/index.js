import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./form.scss";

const Form = (props) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url
    };
    props.handleApiCall(formData);
  };

  const handleUrl = (e) => {
    setUrl(e.target.value);
  }

  const handleGet = (e) => {
    setMethod(e.target.value);
  }

  const handlePost = (e) => {
    setMethod(e.target.value);
  }

  const handlePut = (e) => {
    setMethod(e.target.value);
  }

  const handleDelete = (e) => {
    setMethod(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL:  </span>
          <input name="url" type="text" onChange={handleUrl}/>
          <Button type="submit">GO!</Button>
        </label>
        <label className="methods">
          <Button id="get" value="GET" type="submit" onClick={handleGet}>GET</Button>
          <Button id="post" value="POST" type="submit" onClick={handlePost}>POST</Button>
          <Button id="put" value="PUT" type="submit" onClick={handlePut}>PUT</Button>
          <Button id="delete" value="DELETE" type="submit" onClick={handleDelete}>DELETE</Button>
        </label>
      </form>
    </>
  );
};

export default Form;
