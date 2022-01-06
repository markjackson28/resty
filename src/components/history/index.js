import "./history.scss";

const History = (props) => {
  console.log('sdfsdfa', props.history)
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
              <li>URL: {item.url} Method: {item.method}</li>
            ) : null}
          </div>
      }
    </section>
  );
};

export default History;
