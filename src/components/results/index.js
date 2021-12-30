import "./results.scss";

const Results = (props) => {
  // console.log('*', props.data);
  return (
    <section>
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
