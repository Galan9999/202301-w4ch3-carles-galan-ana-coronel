import Keyboard from "./components/Keyboard/Keyboard";

import Display from "./components/Display/Display";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <span className="message">Calling...</span>
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <Display />
            <a href="call" className="call">
              Call
            </a>
            <a href="hang-up" className="hang active">
              Hang up
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
