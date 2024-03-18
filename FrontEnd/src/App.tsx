import React, { useState, useEffect } from 'react';
import Header from './components/header'; // Ensure the path matches the file name exactly, including case sensitivity
import Column from './components/column';

function App() {
  return (
    <div>
      <Header />
      <Column />
    </div>
  );
}

export default App;
