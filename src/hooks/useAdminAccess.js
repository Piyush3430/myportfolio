import { useState, useEffect } from 'react';

const useAdminAccess = () => {
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [keySequence, setKeySequence] = useState([]);
  const [isListening, setIsListening] = useState(false);

  // Secret key combination: Ctrl + Shift + A
  const SECRET_KEYS = ['Control', 'Shift', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isListening) return;

      const key = e.key === 'a' || e.key === 'A' ? 'KeyA' : e.key;
      
      if (SECRET_KEYS.includes(key) && !keySequence.includes(key)) {
        setKeySequence(prev => [...prev, key]);
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key === 'a' || e.key === 'A' ? 'KeyA' : e.key;
      
      if (SECRET_KEYS.includes(key)) {
        setKeySequence(prev => prev.filter(k => k !== key));
      }
    };

    // Start listening for key combinations
    const startListening = () => {
      setIsListening(true);
      setKeySequence([]);
    };

    // Stop listening and reset
    const stopListening = () => {
      setIsListening(false);
      setKeySequence([]);
    };

    // Check if secret combination is pressed
    if (keySequence.length === SECRET_KEYS.length && 
        SECRET_KEYS.every(key => keySequence.includes(key))) {
      setIsAdminVisible(true);
      stopListening();
    }

    // Listen for key events
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Start listening after a short delay
    const timer = setTimeout(startListening, 1000);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      clearTimeout(timer);
    };
  }, [keySequence, isListening]);

  const closeAdmin = () => {
    setIsAdminVisible(false);
    setKeySequence([]);
  };

  return {
    isAdminVisible,
    closeAdmin,
    isListening
  };
};

export default useAdminAccess;
