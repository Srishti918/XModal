import React, { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
    
    <div className="app-container">
    <h1>User Details Modal</h1>
      <button className="open-button" onClick={() => setModalOpen(true)}>Open Form</button>
      
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
    </>
  );
};

export default App;
