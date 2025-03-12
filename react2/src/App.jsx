import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="React Props Demo" />
      <main>
        <h2>Welcome to react props Example</h2>
        <p>This Demonstrates passing props from parent components to child components</p>
      </main>
      <Footer copyright="© 2025 My React App. All rights reserved" />
    </div>
  );
}
export default App;
