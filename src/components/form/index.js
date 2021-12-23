import React, { useState } from "react";
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
          <span>URL: </span>
          <input name="url" type="text" onChange={handleUrl}/>
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button id="get" value="GET" type="submit" onClick={handleGet}>GET</button>
          <button id="post" value="POST" type="submit" onClick={handlePost}>POST</button>
          <button id="put" value="PUT" type="submit" onClick={handlePut}>PUT</button>
          <button id="delete" value="DELETE" type="submit" onClick={handleDelete}>DELETE</button>
        </label>
      </form>
    </>
  );
};

export default Form;
