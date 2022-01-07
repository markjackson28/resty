import "./history.scss";
import React, { useState } from 'react';

const History = (props) => {

  const handleSubmit = (e) => {
    // e.preventDefault();
    const formData = {
      method: e.method,
      url: e.url
    };
    props.handleApiCall(formData);
  };

  return (
    <section>
      <h1>History</h1>
      {
        // From solution
        props.loading
          ?
          <div>LOADING...</div>
          :
          <div>
            {props.history ? props.history.map(item =>
              <li
                onClick={() => handleSubmit(item)}
              >
                URL: {item.url} Method: {item.method}
              </li>
            ) : null}
          </div>
      }
    </section>
  );
};

export default History;
