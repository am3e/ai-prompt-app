import React from 'react';
import Prompt from './components/Prompt'
import Responses from './components/Responses'
import './App.css';


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-title">Fun with AI</h1>
        
      </header>
      <main>
        <Prompt />
        <article>
            <Responses />
        </article>
      </main>
    </div>
  );
}

export default App;
