import react from "react";
import Finances from "./componentes/Finances";
import { Provider } from 'react-redux'
import generateStore from "./redux/Store";


function App() {
  const store = generateStore();
  return (
    <div className="container">
      <Provider store={store}>

        finances
        <Finances />
      </Provider>

    </div>
  );
}

export default App;
