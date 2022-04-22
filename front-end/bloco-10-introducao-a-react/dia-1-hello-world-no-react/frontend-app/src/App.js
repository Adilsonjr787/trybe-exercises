import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
