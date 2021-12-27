import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  // From solution
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    setRequestParams(requestParams);
    setLoading(true);
    // mock output
    await setTimeout(() => {
      const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
      setData(data);
      setLoading(false);
    }, 1000);
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div data-testid="url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results loading={loading} data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
