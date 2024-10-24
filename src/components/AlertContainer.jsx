
const AlertContainer = ({ alerts }) => {
  return (
    <div id="messages" className="fixed bottom-0 w-full">
      <div className=" mx-auto max-w-screen-xl">{alerts}</div>
    </div>
  );
};

export default AlertContainer;
