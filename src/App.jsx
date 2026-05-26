import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // நம்ம ஹீரோ ஃபைல் இம்போர்ட்

function App() {
  return (
    <div className="bg-black text-white min-h-screen antialiased">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;