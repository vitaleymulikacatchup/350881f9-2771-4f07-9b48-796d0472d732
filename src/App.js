import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AppleTVSection from './components/AppleTVSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <AppleTVSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;