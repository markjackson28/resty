import "./results.scss";

const Results = (props) => {
  return (
    <section>
      <h1>Results</h1>
      {
        // From solution
        props.loading
          ?
          <div>LOADING...</div>
          :
          <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      }
    </section>
  );
};

export default Results;
