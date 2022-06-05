// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './containers/Layout'
import About from './components/footer/About'
import Dashboard from './components/dashboard/Dashboard'



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<p>~~Nothing to see here ~~</p> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
