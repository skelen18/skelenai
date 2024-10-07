// src/components/Notification.jsx
import { useEffect } from "react";

function Notification({ message, type, onClose }) {
  useEffect(() => {
    const timeout = setTimeout(onClose, 3000);
    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      className={`notification ${type === "success" ? "bg-green-500" : "bg-red-500"} 
      text-white px-4 py-2 rounded fixed top-4 right-4 shadow-md`}
    >
      {message}
    </div>
  );
}

import React, { useState, useEffect } from 'react';

const Notification = ({ message, type, visible, setVisible }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // Notifikace zmizí po 3 sekundách
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
