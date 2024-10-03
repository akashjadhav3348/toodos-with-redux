import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ToodoList from './componants/ToodoList';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Nav from './componants/Nav';

function App() {

  return (
    
    <Provider store={store}>
      <Nav />
      <ToodoList />
    </Provider>
  )
}

export default App
