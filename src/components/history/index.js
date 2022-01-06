import "./history.scss";

const History = (props) => {
  return (
    <section>
      <h1>History</h1>
      {
        // From solution
        props.loading
          ?
          <div>LOADING...</div>
          :
          <pre>{props.requestParams ? props.requestParams.method : null}</pre>
      }
    </section>
  );
};

export default History;
