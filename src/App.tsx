import Actions from "./components/Actions/Actions";
import Keyboard from "./components/Keyboard/Keyboard";
import Display from "./components/Display/Display";
import { PhoneContextProvider } from "./contexts/PhoneContext/PhoneContextProvider";
import Info from "./components/Info/Info";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <PhoneContextProvider>
        <Info />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <Display />
            <Actions />
          </div>
        </main>
      </PhoneContextProvider>
    </div>
  );
};

export default App;
