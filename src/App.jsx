import './App.css';
import { Provider } from 'react-redux';
import generateStore from './redux/Store';
import ProductsList from './components/ProductsList'
import Headers from './components/Headers';
function App() {
  const store = generateStore();

  return (
    <Provider store={store}>
      <div >
        <Headers />
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
