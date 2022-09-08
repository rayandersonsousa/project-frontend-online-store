import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchProducts from './components/SearchProducts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ SearchProducts } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
