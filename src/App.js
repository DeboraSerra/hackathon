import React from 'react';
import './App.css';
import Provider from './provider/provider';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
