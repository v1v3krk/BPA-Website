import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Attire from './Pages/Attire/Attire';
import Toolbar from './UI/Toolbar/Toolbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toolbar></Toolbar>
        <Route path="/" component={Home} exact></Route>
        <Route path="/attire" component={Attire} exact></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
