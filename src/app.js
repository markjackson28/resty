import React, { useState, useReducer } from 'react';
import axios from 'axios';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const initialState = {
  data: null,
  requestParams: {},
  loading: false,
  history: []
};

function reducer(state = initialState, action) {
  console.log('running reducer');
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case "DATA/SETTING_DATA":
      return {
        ...state,
        data: [payload],
      };
    case "PARAMS/REQ_PARAMS":
      return {
        ...state,
        requestParams: payload, 
        history: [...state.history, payload]
      }
    case "LOADING/SET_LOADING":
      return {
        ...state,
        loading: payload
      }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const callApi = async (requestParams) => {
    // console.log('running api');
    const action = {
      type: "PARAMS/REQ_PARAMS",
      payload: requestParams
    }
    dispatch(action);
    const loadingAction = {
      type: "LOADING/SET_LOADING",
      payload: true
    }
    dispatch(loadingAction);

    if (requestParams.url === '') {
      const action = {
        type: "DATA/SETTING_DATA",
        payload: 'URL Empty, try again'
      }
      dispatch(action);
      const loadingAction = {
        type: "LOADING/SET_LOADING",
        payload: false
      }
      dispatch(loadingAction);
    } else {
      await setTimeout(() => {
        axios.get(requestParams.url)
          // .then((response) => response.data)
          .then((json) => {
            const action = {
              type: "DATA/SETTING_DATA",
              payload: json.data
            }
            dispatch(action);
          })
          .catch((e) => {
            console.log('Error', e);
            const action = {
              type: "DATA/SETTING_DATA",
              payload: 'Invalid URL, Please try again'
            }
            dispatch(action);
          });
        const loadingAction = {
          type: "LOADING/SET_LOADING",
          payload: false
        }
        dispatch(loadingAction);
      }, 1000);
    }
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div data-testid="url">URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results loading={state.loading} data={state.data} />
      <History loading={state.loading} history={state.history}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
