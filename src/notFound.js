//Displays when you try to access an Invalid Route
const NoMatch = () => {
  return (
    <main>
      <h2 className="error_msg">
        <span className="EP">o</span>oops...
      </h2>
      <img
        src="https://media.gettyimages.com/id/468164033/vector/error-404.jpg?s=2048x2048&w=gi&k=20&c=RdSTMxRpODdRsEtDcTfAHr7G1ThGS7slpnl40uvJddY="
        alt="Error Page"
        width="600px"
        height="400px"
        className="EI"
      />
    </main>
  );
};

export default NoMatch;
